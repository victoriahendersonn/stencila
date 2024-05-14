import { createContext } from '@lit/context'

export type DocPreviewContext = {
  /**
   * Whether the 'chip' for each node is always visible,
   * or only visible when user hovers on node.
   */
  showAllToggleChips: boolean

  /**
   * Toggles the visibility of the provenance highlighting
   * on the entire document
   */
  showAllAuthorshipHighlight: boolean
}

/**
 * Context containing values which effect various elements on the
 * webview preview page.
 */
export const documentPreviewContext =
  createContext<DocPreviewContext>('doc-view')
