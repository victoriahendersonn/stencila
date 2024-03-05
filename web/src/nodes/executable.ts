import {
  AutomaticExecution,
  ExecutionRequired,
  ExecutionStatus,
  ExecutionTag,
} from '@stencila/types'
import { html } from 'lit'
import { property } from 'lit/decorators.js'

import { Entity } from './entity'

/**
 * Abstract base class for web components representing Stencila Schema `Executable` node types
 *
 * @see https://github.com/stencila/stencila/blob/main/docs/reference/schema/flow/executable.md
 */
export abstract class Executable extends Entity {
  @property({ attribute: 'auto-exec' })
  autoExec?: AutomaticExecution

  @property({ attribute: 'execution-tags', type: Array })
  executionTags?: ExecutionTag[]

  @property({ attribute: 'execution-count', type: Number })
  executionCount?: number

  @property({ attribute: 'execution-required' })
  executionRequired?: ExecutionRequired

  @property({ attribute: 'execution-status' })
  executionStatus?: ExecutionStatus

  @property({ attribute: 'execution-ended', type: Number })
  executionEnded?: number

  @property({ attribute: 'execution-duration', type: Number })
  executionDuration?: number

  protected renderActionButtons() {
    return html`<div>TODO: action buttons</div>`
  }
}
