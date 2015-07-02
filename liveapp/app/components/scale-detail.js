
import React from 'react'
import Scale from '../../'


let ScaleDetail = React.createClass({
  render () {
    var scale = new Scale(this.props.params.num)
    var name = scale.name() || scale.decimal
    return (
      <div>
        <h1>Scale {name}</h1>
      </div>
    )
  }
})

export default ScaleDetail
