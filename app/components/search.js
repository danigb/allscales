
import React from 'react'
import ScaleSummary from './scale-summary.js'
import Scale from '../../'

import ScaleNames from '../../lib/scales.json'
Scale.use(ScaleNames)

let Search = React.createClass({
  render () {
    var scales = [2773, 2901, 2905].map(function (num) {
      var s = new Scale(num)
      return (<ScaleSummary scale={s} key={s.decimal}/>)
    })
    return (
      <div className="common-scales">
        <h1>Common scales</h1>
        {scales}
      </div>
    )
  }
})

export default Search
