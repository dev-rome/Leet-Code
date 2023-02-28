/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  let count = 0;
  let numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    if (num % Number(numString[i]) === 0) count++;
  }
  return count;
};