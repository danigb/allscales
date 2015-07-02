var React = require('react/addons')

var Scale = React.createClass({
  propTypes: {
      scale: React.PropTypes.object
  },
  render: function () {
    return (
      <div className='scale'>
        <div className='decimal'>{this.props.scale.decimal}</div>
        <div className='binary'>{this.props.scale.binary}</div>
      </div>
    )
  }
})

var ScaleGroup = React.createClass({
  propTypes: {
      group: React.PropTypes.object,
      size: React.PropTypes.number
  },
  render: function () {
    var scales = this.props.group.map(function (scale) {
      return <Scale key={'scale-' + scale.decimal} scale={scale} />
    })
    return (
      <div className='scale-group'>
        <h2>{this.props.size} note scales</h2>
        {scales}
      </div>
    )
  }
})

module.exports = React.createClass({
  propTypes: {
      scales: React.PropTypes.object
  },
  render: function () {
    var groups = this.props.scales.map(function (group, index) {
      if (group.length > 0) return <ScaleGroup size={index + 1} group={group} />
    }).filter(function (g) { return g })

    return (
      <div className='allScales'>
        {groups}
      </div>
    )
  }
})
