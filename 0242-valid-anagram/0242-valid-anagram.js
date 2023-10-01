/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let objLetter = {};

  for (let c of s) {
    objLetter[c] = (objLetter[c] || 0) + 1;
  }

  for (let c of t) {
    if (!objLetter[c]) return false;
    objLetter[c]--;
  }

  return true;
};