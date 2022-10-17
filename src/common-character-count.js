const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort()
  let c = 0
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) != -1 && arr2.indexOf(arr1[i]) != -1) {
      c++
    }
  }
  return c
}


module.exports = {
  getCommonCharacterCount
};
