const CodePairs = require('./codePairs')

const SEQUENCE_RGX = /\x1b\[([0-9]+)m/g

const Styles = {}

for (const key in CodePairs) {
  const [open, close] = CodePairs[key]
  const openSequence = `\x1b[${open}m`
  const closeSequence = `\x1b[${close}m`

  Styles[key] = (string = '') => {
    const unclosedString = String(string).replace(SEQUENCE_RGX, (sequence) => {
      return sequence === closeSequence ? openSequence : sequence
    })
    return `${openSequence}${unclosedString}${closeSequence}`
  }
}

module.exports = Styles
