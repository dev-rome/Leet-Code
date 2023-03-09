/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let output = target - nums[i];
    if (output in obj) {
      return [obj[output], i];
    }
    obj[nums[i]] = i;
  }
};