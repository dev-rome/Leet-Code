/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let letters = new Set();
    for (let i = 0; i < s.length; i++) {
      if (letters.has(s[i])) return s[i];
      letters.add(s[i]);
  }  
};