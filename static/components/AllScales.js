var React = require('react/addons')
var classNames = require('classNames')

var ALTERS = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0]
var Binary = React.createClass({
  propTypes: {
    binary: React.PropTypes.string
  },
  render: function () {
    var binary = this.props.binary.split('').map(function (digit, index) {
      var names = classNames('digit',
        {'one': digit === '1'},
        {'alter': ALTERS[index] === 1})

      return (
        <div className={names}>{digit}</div>
      )
    })
    return (
      <div className='binary'>
        {binary}
      </div>
    )
  }
})

var Scale = React.createClass({
  propTypes: {
      scale: React.PropTypes.object
  },
  render: function () {
    return (
      <div className='scale'>
        <div className='decimal'>{this.props.scale.decimal}</div>
        <Binary binary={this.props.scale.binary} />
      </div>
    )
  }
})

var ScaleGroup = React.createClass({
  propTypes: {
      group: React.PropTypes.array,
      size: React.PropTypes.number
  },
  render: function () {
    var scales = this.props.group.map(function (scale) {
      return <Scale key={'scale-' + scale.decimal} scale={scale} />
    })
    return (
      <div className='scale-group'>
        <h2>{this.props.size} note scales
          <small>({scales.length})</small></h2>
        {scales}
      </div>
    )
  }
})

module.exports = React.createClass({
  propTypes: {
      all: React.PropTypes.object
  },
  render: function () {
    var groups = this.props.all.scales.map(function (group, index) {
      if (group.length > 0) return <ScaleGroup size={index} group={group} />
    }).filter(function (g) { return g })

    return (
      <div className='allScales'>
        <h1>All possible scales<small>{this.props.all.modesCount}</small></h1>
        {groups}
      </div>
    )
  }
})
