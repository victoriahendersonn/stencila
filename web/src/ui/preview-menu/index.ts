import { apply } from '@twind/core'
import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators'

import { withTwind } from '../../twind'

import '../buttons/icon'

@customElement('preview-menu')
@withTwind()
export class DocumentViewMenu extends LitElement {
  @state()
  protected open: boolean = false

  @property({ type: Boolean })
  visible: boolean = false

  @property({ type: Boolean, attribute: 'show-toggle-chips' })
  showToggleChips: boolean

  @property({ type: Boolean, attribute: 'show-authorship-highlight' })
  showAuthorshipHighlight: boolean

  private eventDispatch = (eventName: string) =>
    this.shadowRoot.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
      })
    )

  protected override render() {
    const styles = apply([
      'fixed right-8 top-8',
      !this.visible && 'opacity-0',
      !this.visible && 'pointer-events-none',
    ])

    return html`
      <div class=${styles}>${this.renderMenuToggle()} ${this.renderMenu()}</div>
    `
  }

  renderMenuToggle = () => {
    const styles = apply([
      'ml-auto',
      'block',
      'bg-gray-100',
      'border rounded',
      'drop-shadow-xl',
    ])

    return html`
      <button class=${styles} @click=${() => (this.open = !this.open)}>
        <div class="flex justify-center items-center w-8 h-8 hover:text-gray-400">
          <sl-icon name=${this.open ? 'x' : 'list'}><sl-icon>
        </div>
      </button>
    `
  }

  renderMenu = () => {
    const styles = apply([
      this.open ? 'opacity-100' : 'opacity-0',
      this.open ? 'max-w-300 max-h-500' : 'max-w-0 max-h-0',
      'mt-2',
      'bg-gray-100',
      'drop-shadow-xl',
      'border rounded',
      'transition-all duration-200',
      'overflow-hidden',
      !this.open && 'pointer-events-none',
    ])

    return html`
      <div class=${styles}>
        ${this.renderMenuItem(
          'Show all nodes',
          'toggle-card-chips',
          this.showToggleChips
        )}
        ${this.renderMenuItem(
          'Show authorship highlighting',
          'toggle-authorship-highlight',
          this.showAuthorshipHighlight
        )}
      </div>
    `
  }

  renderMenuItem(text: string, event: string, active: boolean) {
    const styles = apply([
      'flex items-center justify-between',
      'px-4 py-1',
      'cursor-pointer',
      'hover:bg-gray-300',
    ])

    return html`
      <div
        class=${styles}
        @click=${() => this.eventDispatch(event)}
      >
        <span class="leading-none text-sm mr-2">${text}</span>
        <sl-icon name="check" class="text-sm ${active ? 'opacity-100' : 'opacity-0'}">
      </div>
    `
  }
}
