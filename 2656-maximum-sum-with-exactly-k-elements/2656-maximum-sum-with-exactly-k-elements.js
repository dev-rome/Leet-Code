/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let sum = 0;
  let max = 0;
  let mainIndex = 0;
  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (max < nums[j]) {
        max = nums[j];
        mainIndex = j;
      }
    }
    nums.splice(mainIndex, 1, max + 1);
    sum += max;
  }
  return sum;
};