import * as Assert from 'assert';
import * as Ansi from './index.js';

// It should cast to string:
Assert.strictEqual(
  Ansi.yellow(1),
  '\u001b[33m1\u001b[39m'
);

// It should support nested styles:
Assert.strictEqual(
  Ansi.yellow(`a${Ansi.red('b')}c`),
  '\u001b[33ma\u001b[31mb\u001b[33mc\u001b[39m'
);
