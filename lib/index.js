/**
 * @typedef {import('../main').Style} Style
 */

/**
 * Adapted from {@link https://github.com/chalk/ansi-regex/blob/master/index.js ansi-regex}.
 */
const ANSI_ESCAPE_CODE_REGEXP = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d/#&.:=?%@~_]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))/g;

/* eslint-disable sort-keys */
const Codes = {
  M_RESET: 0,
  M_OPEN_BOLD: 1,
  M_OPEN_DIM: 2,
  M_OPEN_ITALIC: 3,
  M_OPEN_UNDERLINE: 4,
  M_OPEN_INVERSE: 7,
  M_OPEN_HIDDEN: 8,
  M_OPEN_STRIKETHROUGH: 9,
  M_CLOSE_BOLD_DIM: 22,
  M_CLOSE_ITALIC: 23,
  M_CLOSE_UNDERLINE: 24,
  M_CLOSE_INVERSE: 27,
  M_CLOSE_HIDDEN: 28,
  M_CLOSE_STRIKETHROUGH: 29,
  F_OPEN_BLACK: 30,
  F_OPEN_RED: 31,
  F_OPEN_GREEN: 32,
  F_OPEN_YELLOW: 33,
  F_OPEN_BLUE: 34,
  F_OPEN_MAGENTA: 35,
  F_OPEN_CYAN: 36,
  F_OPEN_WHITE: 37,
  F_CLOSE: 39,
  B_OPEN_BLACK: 40,
  B_OPEN_RED: 41,
  B_OPEN_GREEN: 42,
  B_OPEN_YELLOW: 43,
  B_OPEN_BLUE: 44,
  B_OPEN_MAGENTA: 45,
  B_OPEN_CYAN: 46,
  B_OPEN_WHITE: 47,
  B_CLOSE: 49,
  F_OPEN_BLACK_BRIGHT: 90,
  F_OPEN_RED_BRIGHT: 91,
  F_OPEN_GREEN_BRIGHT: 92,
  F_OPEN_YELLOW_BRIGHT: 93,
  F_OPEN_BLUE_BRIGHT: 94,
  F_OPEN_MAGENTA_BRIGHT: 95,
  F_OPEN_CYAN_BRIGHT: 96,
  F_OPEN_WHITE_BRIGHT: 97,
  B_OPEN_BLACK_BRIGHT: 100,
  B_OPEN_RED_BRIGHT: 101,
  B_OPEN_GREEN_BRIGHT: 102,
  B_OPEN_YELLOW_BRIGHT: 103,
  B_OPEN_BLUE_BRIGHT: 104,
  B_OPEN_MAGENTA_BRIGHT: 105,
  B_OPEN_CYAN_BRIGHT: 106,
  B_OPEN_WHITE_BRIGHT: 107
};
/* eslint-enable sort-keys */

/**
 * @param {number} open
 * @param {number} close
 * @return {Style}
 */
const _createStyle = (open, close) => {
  const openSequence = `\x1b[${open}m`;
  const closeSequence = `\x1b[${close}m`;

  return (value = '') => {
    const unclosedString = String(value).replace(ANSI_ESCAPE_CODE_REGEXP, (sequence) => {
      return sequence === closeSequence
        ? openSequence
        : sequence;
    });

    return `${openSequence}${unclosedString}${closeSequence}`;
  };
};

/**
 * @param {string} string
 * @return {string}
 */
export const strip = (string) => {
  return string.replace(ANSI_ESCAPE_CODE_REGEXP, '');
};

export const reset = _createStyle(Codes.M_RESET, Codes.M_RESET);
export const bold = _createStyle(Codes.M_OPEN_BOLD, Codes.M_CLOSE_BOLD_DIM);
export const dim = _createStyle(Codes.M_OPEN_DIM, Codes.M_CLOSE_BOLD_DIM);
export const italic = _createStyle(Codes.M_OPEN_ITALIC, Codes.M_CLOSE_ITALIC);
export const underline = _createStyle(Codes.M_OPEN_UNDERLINE, Codes.M_CLOSE_UNDERLINE);
export const inverse = _createStyle(Codes.M_OPEN_INVERSE, Codes.M_CLOSE_INVERSE);
export const hidden = _createStyle(Codes.M_OPEN_HIDDEN, Codes.M_CLOSE_HIDDEN);
export const strikethrough = _createStyle(Codes.M_OPEN_STRIKETHROUGH, Codes.M_CLOSE_STRIKETHROUGH);
export const black = _createStyle(Codes.F_OPEN_BLACK, Codes.F_CLOSE);
export const red = _createStyle(Codes.F_OPEN_RED, Codes.F_CLOSE);
export const green = _createStyle(Codes.F_OPEN_GREEN, Codes.F_CLOSE);
export const yellow = _createStyle(Codes.F_OPEN_YELLOW, Codes.F_CLOSE);
export const blue = _createStyle(Codes.F_OPEN_BLUE, Codes.F_CLOSE);
export const magenta = _createStyle(Codes.F_OPEN_MAGENTA, Codes.F_CLOSE);
export const cyan = _createStyle(Codes.F_OPEN_CYAN, Codes.F_CLOSE);
export const white = _createStyle(Codes.F_OPEN_WHITE, Codes.F_CLOSE);
export const bgBlack = _createStyle(Codes.B_OPEN_BLACK, Codes.B_CLOSE);
export const bgRed = _createStyle(Codes.B_OPEN_RED, Codes.B_CLOSE);
export const bgGreen = _createStyle(Codes.B_OPEN_GREEN, Codes.B_CLOSE);
export const bgYellow = _createStyle(Codes.B_OPEN_YELLOW, Codes.B_CLOSE);
export const bgBlue = _createStyle(Codes.B_OPEN_BLUE, Codes.B_CLOSE);
export const bgMagenta = _createStyle(Codes.B_OPEN_MAGENTA, Codes.B_CLOSE);
export const bgCyan = _createStyle(Codes.B_OPEN_CYAN, Codes.B_CLOSE);
export const bgWhite = _createStyle(Codes.B_OPEN_WHITE, Codes.B_CLOSE);
export const blackBright = _createStyle(Codes.F_OPEN_BLACK_BRIGHT, Codes.F_CLOSE);
export const gray = blackBright;
export const redBright = _createStyle(Codes.F_OPEN_RED_BRIGHT, Codes.F_CLOSE);
export const greenBright = _createStyle(Codes.F_OPEN_GREEN_BRIGHT, Codes.F_CLOSE);
export const yellowBright = _createStyle(Codes.F_OPEN_YELLOW_BRIGHT, Codes.F_CLOSE);
export const blueBright = _createStyle(Codes.F_OPEN_BLUE_BRIGHT, Codes.F_CLOSE);
export const magentaBright = _createStyle(Codes.F_OPEN_MAGENTA_BRIGHT, Codes.F_CLOSE);
export const cyanBright = _createStyle(Codes.F_OPEN_CYAN_BRIGHT, Codes.F_CLOSE);
export const whiteBright = _createStyle(Codes.F_OPEN_WHITE_BRIGHT, Codes.F_CLOSE);
export const bgBlackBright = _createStyle(Codes.B_OPEN_BLACK_BRIGHT, Codes.B_CLOSE);
export const bgGray = bgBlackBright;
export const bgRedBright = _createStyle(Codes.B_OPEN_RED_BRIGHT, Codes.B_CLOSE);
export const bgGreenBright = _createStyle(Codes.B_OPEN_GREEN_BRIGHT, Codes.B_CLOSE);
export const bgYellowBright = _createStyle(Codes.B_OPEN_YELLOW_BRIGHT, Codes.B_CLOSE);
export const bgBlueBright = _createStyle(Codes.B_OPEN_BLUE_BRIGHT, Codes.B_CLOSE);
export const bgMagentaBright = _createStyle(Codes.B_OPEN_MAGENTA_BRIGHT, Codes.B_CLOSE);
export const bgCyanBright = _createStyle(Codes.B_OPEN_CYAN_BRIGHT, Codes.B_CLOSE);
export const bgWhiteBright = _createStyle(Codes.B_OPEN_WHITE_BRIGHT, Codes.B_CLOSE);
