
import React from 'react'
import Router from 'react-router'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router'

import ScaleDetailHandler from './components/scale-detail.js'
import SearchHandler from './components/search.js'

let App = React.createClass({
  render () {
    return (
      <div className='nav'>
        <Link to='app'>Common</Link>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    )
  }
})

let routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={SearchHandler}/>
    <Route name='scale' path='/scale/:num' handler={ScaleDetailHandler}/>
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
