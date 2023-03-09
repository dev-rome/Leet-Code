/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const obj = {};
  for (const letter in magazine) {
    obj[magazine[letter]] = (obj[magazine[letter]] || 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!obj[ransomNote[i]]--) {
      return false;
    }
  }
  return true;
};