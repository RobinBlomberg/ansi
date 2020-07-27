const Ansi = require('..')
const { deepEqual, it } = require('../../test/test')

it('should cast to string', () => {
  deepEqual(
    Ansi.yellow(1),
    '\u001b[33m1\u001b[39m'
  )
})

it('should support nested styles', () => {
  deepEqual(
    Ansi.yellow(`a${Ansi.red('b')}c`),
    '\u001b[33ma\u001b[31mb\u001b[33mc\u001b[39m'
  )
})
