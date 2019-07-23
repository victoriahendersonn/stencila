/**
 * Generate documentation
 */

/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import * as encoda from '@stencila/encoda'
import encodaProcess from '@stencila/encoda/dist/process'
import fs from 'fs-extra'
import globby from 'globby'
import path from 'path'
import { Article, Strong } from '../types'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
docs()

/**
 * Generate docs for each `built/*.schema.json` file and
 *
  convert any `schema/*.md` files to HTML.
 *
 * The generated `built/*.schema.md` file should normally
 * in `include`d into the `schema/*.md` file for the type.
 */
async function docs(): Promise<void> {
  const schemas = await globby('built/*.schema.json')

  await Promise.all(
    schemas.map(async jsonFile => {
      try {
        const schema = await fs.readJSON(jsonFile)
        const { title } = schema

        const articleMd = schema2Article(schema)
        const schemaMdFile = path.join('built', `${title}.schema.md`)
        await encoda.write(articleMd, schemaMdFile)

        const mdFile = path.join('schema', `${title}.md`)
        if (await fs.pathExists(mdFile)) {
          const article = await encoda.read(mdFile)
          const processed = await encodaProcess(
            {
              // TODO: Remove @ts-ignore when type-guard branch is merged to master
              // @ts-ignore
              ...article,
              title: `${title} (${schema.status})`,
              content: [
                {
                  type: 'Heading',
                  depth: 2,
                  content: ['Role: ', schema.role]
                },
                ...article.content
              ]
            },
            path.dirname(mdFile)
          )

          const htmlFile = path.join('built', `${title}.html`)
          await encoda.write(processed, htmlFile, {
            isBundle: false, // Set isBundle to true to work locally with NPM linked Thema style changes
            theme: 'stencila'
          })
        }
      } catch (error) {
        console.error(error)
      }
    })
  )

  // Cover over any files generated during processing
  // so that links in HTML files work
  const outs = await globby('schema/*.out.*')
  await Promise.all(
    outs.map(async file => {
      return fs.copy(file, path.join('built', path.basename(file)))
    })
  )
}

/**
 * Create an article from a JSON schema object using
 * properties like `description`, `parent` etc.
 */
function schema2Article(schema: { [key: string]: any }): Article {
  const { title = 'Untitled', properties = {} } = schema

  const requiredFields = schema.required || []

  // Differentiate required properties by bolding them and adding a `(required)` suffix
  const requiredWrapper = (name: string): Strong | string =>
    requiredFields.includes(name)
      ? {
          type: 'Strong',
          content: [name, ' ', { type: 'Emphasis', content: ['(required)'] }]
        }
      : name

  const propertiesTable = {
    type: 'Table',
    rows: Object.entries(properties)
      // TODO: Maybe sort properties in ascending order of inheritance depth
      // and then alphabetically, like schema.org
      .map(([name, prop]: [string, any]) => {
        const { description = '', type = '', from = '' } = prop
        return {
          type: 'TableRow',
          cells: [
            {
              type: 'TableCell',
              content: [
                {
                  type: 'Link',
                  target: `./${from}.html`,
                  content: [from]
                }
              ]
            },
            {
              type: 'TableCell',
              content: [requiredWrapper(name)]
            },
            {
              type: 'TableCell',
              content: [description]
            },
            {
              type: 'TableCell',
              content: [
                {
                  type: 'Code',
                  value: type
                }
              ]
            }
          ]
        }
      })
  }

  const article: Article = {
    type: 'Article',
    title,
    authors: [],
    content: [
      {
        type: 'Paragraph',
        content: [schema.description || '']
      },
      propertiesTable
    ]
  }

  return article
}
