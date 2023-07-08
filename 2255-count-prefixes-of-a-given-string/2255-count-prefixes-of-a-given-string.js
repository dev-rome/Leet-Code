/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === s.substring(0, words[i].length)) {
      count++;
    }
  }
  return count;
};