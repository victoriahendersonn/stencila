import { html } from 'lit'
import { customElement, property } from 'lit/decorators'

import { Entity } from './entity'
import './helpers/block-infobox'

/**
 * Web component representing a Stencila Schema `Heading` node
 *
 * @see https://github.com/stencila/stencila/blob/main/docs/reference/schema/prose/heading.md
 */
@customElement('stencila-heading')
export abstract class Heading extends Entity {
  @property({ type: Number })
  level: Number

  override render() {
    return html`
      <slot name="content"></slot>

      <stencila-block-infobox icon="heading" title="Heading">
        <slot name="authors" slot="authors"></slot>
      </stencila-block-infobox>
    `
  }
}
