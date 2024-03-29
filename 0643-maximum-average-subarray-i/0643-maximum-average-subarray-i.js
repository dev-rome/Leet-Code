/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < k; i++) {
    max += nums[i];
  }

  temp = max;
  for (let i = k; i < nums.length; i++) {
    temp = temp - nums[i - k] + nums[i];
    if (temp > max) max = temp; 
  }
  return max / k;
};