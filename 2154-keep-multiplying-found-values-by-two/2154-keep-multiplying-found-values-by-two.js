/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  const obj = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    if (obj.has(original)) {
      original *= 2;
    }
  }
  return original;
};