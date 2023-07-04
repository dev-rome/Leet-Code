/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  const obj = new Set(nums);
  let sum = original;

  for (let i = 0; i < nums.length; i++) {
    if (obj.has(sum)) {
      sum = sum * 2;
    }
  }
  return sum;
};