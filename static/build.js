var metalsmith = require('metalsmith')
require('node-jsx').install()
var React = require('react/addons')
var templates = require('metalsmith-templates')

metalsmith(__dirname)
  .destination('output')
  .use(allscales('allscales.html'))
  .use(templates('handlebars'))
  .use(require('metalsmith-watch')())
  .build(function (err) {
    if (err) throw err
    console.log('Metalmsith done!')
  })

var all = require('./allscales.js')()
function allscales (filename) {
  return function (files, metalsmith, done) {
    var AllScalesApp = React.createFactory(require('./components/AllScales'))
    var html = React.renderToString(AllScalesApp({ all: all }))
    console.log('Updating ' + filename + '... ')
    files[filename] = {
      title: 'All scales',
      template: 'index.html',
      contents: new Buffer(html)
    }
    done()
  }
}
