/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  let arrSentence = sentence.split(" ");
  let prefix = searchWord.length;
  for (let i = 0; i < arrSentence.length; i++) {
    if (arrSentence[i].substring(0, prefix) === searchWord) {
      return i + 1;
    }
  }
  return -1;
};