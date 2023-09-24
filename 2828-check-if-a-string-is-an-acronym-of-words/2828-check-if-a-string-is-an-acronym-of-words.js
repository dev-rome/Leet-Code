/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
  let str = ""
  for(let i = 0; i < words.length; i++) {
      let letter = words[i].slice(0, 1)
      str += letter;
  }  
    return str === s;
};