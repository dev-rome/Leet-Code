/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    let word = sentences[i].split(" ");
    count = word.length;
    if (count > max) max = count;
  }
  return max;
};