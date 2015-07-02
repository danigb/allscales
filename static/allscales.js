'use strict'

var Scale = require('music-scale')

var MIN = parseInt('100000000000', 2)
var MAX = parseInt('111111111111', 2)

module.exports = function (maxLeap) {
  maxLeap = maxLeap || 4
  var modesCount = 0

  var groupedModes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function () { return [] })
  for (var i = MIN; i <= MAX; i++) {
    var binary = i.toString(2)
    var scale = new Scale(binary)
    if (scale.leap() <= maxLeap) {
      groupedModes[scale.length].push(scale)
      modesCount++
    }
  }
  var groupedScales = groupedModes.map(function (group) {
    var scales = []
    group.forEach(function (mode) {
      for (var i = 0; i < scales.length; i++) {
        if (mode.isModeOf(scales[i])) return
      }
      scales.push(mode)
    })
    return scales.map(function (s) { return s.cannonicalMode() })
  })

  // var modeLengths = groupedModes.map(function (g) { return g.length })
  var scaleLengths = groupedScales.map(function (g) { return g.length })

  return {
    maxLeap: maxLeap,
    modesCount: modesCount,
    scales: groupedScales,
    scaleLengths: scaleLengths }
}
