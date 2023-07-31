/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(" ");
  let str = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "") continue;
    if (str.length > 0) str += " ";

    str += arr[i];
  }
  return str;
};