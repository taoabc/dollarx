const { DollarRecognizer } = require('./src/dollar')

function createDollar (withDefaults = true) {
  console.log('createDollar')
}

// function createNDollar (withDefaults = true) {
//   console.log('createNDollar')
// }

// function createPDollar (withDefaults = true) {
//   console.log('createPDollar')
// }

/**
 *
 * @param {Array} points
 * @param {boolean} useProtractor
 */
function dollarRecognize (points, useProtractor = false) {
  const dr = new DollarRecognizer()
  return dr.recognize(points)
}

// function nDollarRecognize () {
//   console.log('nDollarRecognize')
// }

// function pDollarRecognize () {
//   console.log('pDollarRecognize')
// }

module.exports = {
  createDollar,
  // createNDollar,
  // createPDollar,
  dollarRecognize
  // nDollarRecognize,
  // pDollarRecognize
}
