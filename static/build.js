var metalsmith = require('metalsmith')
require('node-jsx').install()
var React = require('react/addons')

metalsmith(__dirname)
  .destination('./output')
  .use(allscales('index.html'))
  .build(function (err) {
    if (err) throw err
  })

function allscales (filename) {
  return function (files, metalsmith, done) {
    files[filename] = { contents: new Buffer('hola!')}
  }
}

var all = require('./allscales.js')()
var AllScalesApp = React.createFactory(require('./components/AllScales'))

var html = React.renderToString(AllScalesApp({ scales: all.scales }))
console.log(html)
