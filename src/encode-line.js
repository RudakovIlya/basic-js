const { NotImplementedError, checkForThrowingErrors } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} tr
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  return str.replace(/([a-z])\1*/g, (it) => (it.length > 1 ? it.length + it[0] : it[0]))

}

module.exports = {
  encodeLine
};
