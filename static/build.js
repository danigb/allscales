var metalsmith = require('metalsmith')
require('node-jsx').install()
var React = require('react/addons')
var templates = require('metalsmith-templates')

metalsmith(__dirname)
  .destination('output')
  .use(allscales('index.html'))
  .use(templates('handlebars'))
  .build(function (err) {
    if (err) throw err
    console.log('Metalmsith done!')
  })

var all = require('./allscales.js')()
function allscales (filename) {
  return function (files, metalsmith, done) {
    var AllScalesApp = React.createFactory(require('./components/AllScales'))
    var html = React.renderToString(AllScalesApp({ scales: all.scales }))
    files[filename] = {
      title: 'All scales',
      contents: new Buffer(html)
    }
    done()
  }
}
