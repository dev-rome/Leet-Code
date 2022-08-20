/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0;
  let str = s.split(" ").join("").toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  for (let j = str.length - 1; j >= 0; j--) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
  }
  return true;
};