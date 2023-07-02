/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const subArray = arr.slice(i, j + 1);
      if (subArray.length % 2 !== 0) {
        sum += subArray.reduce((a, b) => a + b, 0);
      }
    }
  }
  return sum;
};