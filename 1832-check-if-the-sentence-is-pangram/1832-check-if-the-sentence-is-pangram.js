/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let arr = sentence.split("");
  let alphabet = "abcdefghijklmnopqrstuvwyz";

  for (let i = 0; i < alphabet.length; i++) {
    if (!arr.includes(alphabet[i])) return false;
  }
  return true;
};