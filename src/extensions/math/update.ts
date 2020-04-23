/**
 * A script to generate `./styles.css`.
 *
 * Run using `npx ts-node --files src/components/math/update.ts`.
 */

import fs from 'fs'
import MathJax from 'mathjax-node'
import path from 'path'

const dest = path.join(__dirname, 'styles.css')

MathJax.typeset({ css: true }, (result) => {
  const { errors, css } = result
  if (errors !== undefined) errors.map((err) => console.error(err))
  fs.writeFileSync(
    dest,
    `/* Generated by ./${path.basename(__filename)}. Do not edit. */

/* stylelint-disable */
/* prettier-ignore */

${css}`
  )
})
