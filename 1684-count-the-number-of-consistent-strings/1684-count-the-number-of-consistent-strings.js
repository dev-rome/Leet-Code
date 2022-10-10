/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let isLetter = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) {
        isLetter = false;
        break;
      }
    }
    if (isLetter) count++;
  }
  return count;
};