import { describe, equal, it, test } from '@robinblomberg/test';
import * as Ansi from '../lib/index.js';

test('@robinblomberg/test', () => {
  describe('(style)', () => {
    it('should cast to string', () => {
      equal(
        Ansi.yellow(1),
        '\u001b[33m1\u001b[39m'
      );
    });

    it('should support nested styles', () => {
      equal(
        Ansi.yellow(`a${Ansi.red('b')}c`),
        '\u001b[33ma\u001b[31mb\u001b[33mc\u001b[39m'
      );
    });
  });
})();
