/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  const obj = {};
    
  for (const letter of s) {
    obj[letter] = (obj[letter] || 0) + 1;
  }
  
  const count = obj[s[0]];

  for (const key in obj) {
    if (obj[key] !== count) {
      return false;
    }
  }
  return true;
};