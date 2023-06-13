/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  nums.sort((a, b) => b - a);
  let min = Infinity;

  let left = 0;
  let right = k - 1;

  while (right < nums.length) {
    const diff = nums[left] - nums[right];
    if (diff < min) {
      min = diff;
    }
    left++;
    right++;
  }

  return min;
};