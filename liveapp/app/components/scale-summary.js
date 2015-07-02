
import React from 'react'
import { Link } from 'react-router'

let ScaleSummary = React.createClass({
  render () {
    var scale = this.props.scale
    var name = scale.name() || scale.decimal
    return (
      <div className='scale'>
        <h2>{name} scale</h2>
        <Link to='scale' params={{ num: scale.decimal}}>{scale.binary}</Link>
      </div>
    )
  }
})

export default ScaleSummary
