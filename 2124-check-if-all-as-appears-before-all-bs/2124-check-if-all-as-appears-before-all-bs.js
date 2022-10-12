/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.includes("ba")) {
      return false;
    }
  }
  return true;
};