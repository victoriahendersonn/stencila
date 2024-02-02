import { provide } from '@lit/context'
import { html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

// import logo from '../images/stencilaIcon.svg'
import { SidebarContext, sidebarContext } from '../contexts/sidebar-context'
import { THEMES } from '../themes/themes'
import type { DocumentId, DocumentView } from '../types'
import type { UISelectorSelectedEvent } from '../ui/selector'
import { TWLitElement } from '../ui/twind'
import { VIEWS } from '../views/views'

import '../ui/file-tree'
import '../ui/selector'
import '../ui/sidebar'
import '../ui/tab'
import '../ui/view-container'
import '../ui/buttons/icon'

import '../views/static'
import '../views/live'
import '../views/dynamic'
import '../views/source'
import '../views/split'
import '../views/visual'
import '../views/directory'

import './main.css'

import './shoelace'

/**
 * Application Wrapper
 *
 * Wraps the application in the `app-chrome`. Contains the main header and
 * footer.
 */
@customElement('stencila-main-app')
export class App extends TWLitElement {
  /**
   * The id of the current document (if any)
   *
   * The app can be opened with a document or not. If there is no `doc` attribute
   * (e.g. because the server could not resolve a file from the URL path)
   * then the app should offer some suggestions.
   */
  @property()
  doc?: DocumentId

  /**
   * The current view of the current document
   *
   * If there is no `view` attribute then this will be dynamically
   * determined based on the maximum access level that the user has for
   * the document.
   */
  @property()
  view?: DocumentView = 'live'

  /**
   * The theme to use for HTML-based views of the document (e.g. `static`, `live`)
   */
  @property()
  theme: string = 'default'

  /**
   * The format to use for source views of the document (`source` and `split` view)
   */
  @property()
  format: string = 'markdown'

  /**
   * The name of the editor tab which is active.
   */
  @property()
  activeTab: string = ''

  @state()
  filesOpen: boolean = false

  /**
   * This context enables components to:
   * - open the files viewer
   * - change the view by clicking on a sidebar button
   */
  @provide({ context: sidebarContext })
  @property({ attribute: false })
  contextObject: SidebarContext = {
    view: 'live',
    filesOpen: false,
  }

  override render() {
    return html`<div
      class="font-sans flex flex-row bg-neutral-100 fixed top-0 left-0 min-h-screen w-full"
    >
      <stencila-ui-sidebar></stencila-ui-sidebar>
      <stencila-ui-file-tree-layout
        class="self-end"
      ></stencila-ui-file-tree-layout>

      <div class="flex flex-col flex-grow">
        ${this.renderHeader()}

        <stencila-ui-view-container view=${this.contextObject.view}>
          ${this.renderView()}
        </stencila-ui-view-container>
      </div>
    </div> `
  }

  // TODO: the header should move to it's own component & maintain its own state.
  private renderHeader() {
    return html`<header class="w-full flex items-end h-20">
      <nav class="flex bg-neutral-100 h-full w-full">
        <div class="flex-grow flex items-end h-full relative z-10 space-x-1">
          <stencila-ui-editor-tab ?active=${true}
            >README</stencila-ui-editor-tab
          >
        </div>
        <div class="flex-shrink-0 flex-grow-0 flex items-center p-5">
          <div class="flex-grow justify-start flex flex-row space-x-4">
            ${this.renderViewSelect()} ${this.renderThemeSelect()}
          </div>
          <div class="ml-20 flex space-x-4">
            <stencila-ui-icon-button
              icon="status"
              ?disabled=${true}
            ></stencila-ui-icon-button>
            <stencila-ui-icon-button icon="info"></stencila-ui-icon-button>
            <stencila-ui-icon-button icon="print"></stencila-ui-icon-button>
          </div>
        </div>
      </nav>
    </header>`
  }

  private renderViewSelect() {
    const clickEvent = (e: UISelectorSelectedEvent['detail']) => {
      this.contextObject = {
        ...this.contextObject,
        view: e.item.value as Exclude<DocumentView, 'directory'>,
      }
    }

    return html`<stencila-ui-selector
      label="View"
      target=${this.view}
      targetClass="view-selector"
      .list=${Object.entries(VIEWS)}
      .clickEvent=${clickEvent}
    >
    </stencila-ui-selector>`
  }

  private renderThemeSelect() {
    const clickEvent = (e: UISelectorSelectedEvent['detail']) => {
      this.theme = e.item.value
    }

    return html` <stencila-ui-selector
      label="Theme"
      target=${this.theme}
      targetClass="theme-selector"
      .list=${Object.entries(THEMES)}
      .clickEvent=${clickEvent}
    >
    </stencila-ui-selector>`
  }

  /* eslint-disable lit/attribute-value-entities */
  // @ts-expect-error "will use soon enough"
  private renderPrintLink() {
    return html`<a
      href="?mode=doc&view=print&theme=${this.theme}"
      target="_blank"
      >Print preview</a
    >`
  }
  /* eslint-enable lit/attribute-value-entities */

  private renderView() {
    switch (this.contextObject.view) {
      case 'static':
        return html`<stencila-static-view
          view="static"
          doc=${this.doc}
          theme=${this.theme}
          fetch
        ></stencila-static-view>`

      case 'live':
        return html`<stencila-live-view
          view="live"
          doc=${this.doc}
          theme=${this.theme}
        ></stencila-live-view>`

      case 'dynamic':
        return html`<stencila-dynamic-view
          view="dynamic"
          doc=${this.doc}
          theme=${this.theme}
        ></stencila-dynamic-view>`

      case 'source':
        return html`<stencila-source-view
          view="source"
          doc=${this.doc}
          format=${this.format}
        ></stencila-source-view>`

      case 'split':
        return html`<stencila-split-view
          view="split"
          doc=${this.doc}
          format=${this.format}
          theme=${this.theme}
        ></stencila-split-view>`

      case 'visual':
        return html`<stencila-visual-view
          view="visual"
          doc=${this.doc}
          theme=${this.theme}
        ></stencila-visual-view>`

      case 'directory':
        return html`<stencila-live-view
          view="live"
          doc=${this.doc}
          theme=${this.theme}
        ></stencila-live-view>`

      default:
        return html``
    }
  }

  override connectedCallback() {
    super.connectedCallback()

    // Event listener for updating the file drawer open/close
    this.shadowRoot.addEventListener(
      'stencila-file-toggle',
      (e: Event & { detail: Required<Pick<SidebarContext, 'filesOpen'>> }) => {
        this.contextObject = {
          ...this.contextObject,
          filesOpen: e.detail.filesOpen,
        }

        console.log('event', this.contextObject)
      }
    )
  }
}
