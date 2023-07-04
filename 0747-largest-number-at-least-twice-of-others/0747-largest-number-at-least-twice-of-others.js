/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let maxNum = -Infinity;
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxNum < nums[i]) {
      maxNum = nums[i];
      maxIndex = i;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== maxNum && maxNum < 2 * nums[j]) {
      return -1;
    }
  }
  return maxIndex;
};