import { consume } from '@lit/context'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { SidebarContext, sidebarContext } from '../../contexts/sidebar-context'
import { withTwind } from '../../twind'
import { DocumentId } from '../../types'

/**
 * UI File tree layout
 *
 * Wraps our directory tree in a UI element and interacts with the context
 */
@customElement('stencila-ui-file-tree-layout')
@withTwind()
export class UIFileTreeLayout extends LitElement {
  @property()
  doc?: DocumentId

  @consume({ context: sidebarContext, subscribe: true })
  context: SidebarContext

  override render() {
    console.log('consume')
    return html` <div
      class="${this.context?.filesOpen
        ? 'block'
        : 'hidden'} rounded-t border border-b-0 border-neutral-200 bg-white mt-auto mr-4 h-screen max-h-[calc(100vh-5rem)] w-48 overflow-x-scroll px-0 py-2"
    >
      <stencila-directory-view doc=${this.doc}></stencila-directory-view>
    </div>`
  }
}
