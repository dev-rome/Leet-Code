/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let arr = [];
  let result;
  for (left; left <= right; left++) {
    for (let i = 0; i < left.toString().length; i++) {
      if (
        left % left.toString().charAt(i) === 0 &&
        left.toString().charAt(i) !== 0
      ) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
    if (result) {
      arr.push(left);
    }
  }
  return arr;
};