require('node-jsx').install()

var React = require('react/addons')
var all = require('./allscales.js')()
var AllScalesApp = React.createFactory(require('./components/AllScales'))

var html = React.renderToString(AllScalesApp({ scales: all.scales }))
console.log(html)
