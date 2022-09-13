/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  if(!word.includes(ch)) return word;
  let arr = word.split("");  
  let index = arr.indexOf(ch);
  let str = arr.splice(0, index + 1).reverse();
  return str.concat(arr).join("");
};