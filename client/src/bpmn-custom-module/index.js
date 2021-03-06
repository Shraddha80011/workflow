module.exports = {
  __depends__: [
    require('diagram-js-direct-editing'),
    require('diagram-js/lib/features/context-pad'),
    require('diagram-js/lib/features/selection'),
    require('diagram-js/lib/features/connect'),
    require('diagram-js/lib/features/create')
    // require('../popup-menu')
  ],
  __init__: ['customRenderer', 'customContextPad', 'customPaletteProvider'],
  customContextPad: ['type', require('./contextPad/CustomContextPadProvider')],
  customPaletteProvider: ['type', require('./palette/CustomPaletteProvider')],
  customRenderer: ['type', require('./draw/CustomRenderer')]
    // __init__: ['customPaletteProvider'],
}
