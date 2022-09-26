import { html } from 'lit'
import { customElement, property } from 'lit/decorators'

import StencilaElement from '../utils/element'
import { twSheet } from '../utils/css'

const { tw, sheet } = twSheet()

/**
 * A tag
 */
@customElement('stencila-tag')
export default class StencilaTag extends StencilaElement {
  static styles = [sheet.target]

  /**
   * The size of the tag
   */
  @property()
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm'

  /**
   * The color hue of the tag (background and text)
   */
  @property()
  color: string

  render() {
    return html`<span
      part="base"
      class="${tw`rounded-lg border(1 ${this.color}-100) bg(${
        this.color
      }-50) inline-block align-middle leading-4 text(${this.color}-400 ${
        this.size === 'xxs' ? '[10px]' : this.size
      }) font-light px-1`}"
      ><slot></slot
    ></span>`
  }
}
