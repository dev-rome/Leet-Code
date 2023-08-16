/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const results = [];

  for (const num of nums) {
    const index = Math.abs(num) - 1;
    
    if(nums[index] > 0) {
      nums[index] = nums[index] * (-1)
    } else {
      results.push(Math.abs(num))
    }
  }
  return results
};