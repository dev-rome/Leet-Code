/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
  let count = 0;
  for (let i = 0; i < patterns.length; i++) {
    let currentWord = patterns[i];
    if (word.includes(currentWord)) count++;
  }
  return count;
};