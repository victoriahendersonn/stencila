import { property } from 'lit/decorators.js'

import { Executable } from './executable'

/**
 * Abstract base class for web components representing Stencila Schema `CodeExecutable` node types
 *
 * @see https://github.com/stencila/stencila/blob/main/docs/reference/schema/code/code-executable.md
 */
export abstract class CodeExecutable extends Executable {
  @property()
  code: string

  /**
   * 'Stringified' array of the author provenance, containing positions,
   * author info and level of machine contribution
   */
  @property({ attribute: 'code-authorship' })
  codeAuthorship?: string

  @property({ attribute: 'programming-language' })
  programmingLanguage?: string
}
