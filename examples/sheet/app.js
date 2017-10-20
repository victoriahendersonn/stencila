import { Configurator } from 'substance'
import { SheetPackage, SheetPage, SheetSchema, Host, getQueryStringParam, FunctionManager} from 'stencila'

import blank from './blank'
import dataClean from './dataClean'
import fullup from './fullup'

window.addEventListener('load', () => {
  const example = getQueryStringParam('example') || 'blank'

  let peers = (getQueryStringParam('peers') || window.STENCILA_PEERS)
  if (peers) peers = peers.split(',')

  const discover = window.STENCILA_DISCOVER ? parseFloat(window.STENCILA_DISCOVER) : false

  let functionManager = new FunctionManager()
  functionManager.importLibrary('core', window.STENCILA_LIBCORE)

  let host = new Host({
    functionManager,
    peers: peers,
    discover: discover,
  })
  host.initialize().then(() => {
    let configurator = new Configurator()
    configurator.import(SheetPackage)
    const importer = configurator.createImporter(SheetSchema.getName())

    let generator = {
      'blank': blank,
      'data-clean': dataClean,
      'fullup': fullup
    }[example]
    if (!generator) console.error('No such example: ' + example)
    const xml = generator()

    const sheet = importer.importDocument(xml)
    SheetPage.mount({ sheet, host }, window.document.body)

    window.stencila = { host, sheet }
  })
})
