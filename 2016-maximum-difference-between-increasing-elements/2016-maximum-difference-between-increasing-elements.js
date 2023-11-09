/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let maxValue = -1;
   for(let i = 0; i < nums.length; i++) {
       for(let j = 0; j < nums.length; j++) {
           if(i < j && nums[i] < nums[j]) {
               maxValue = Math.max(maxValue, nums[j] - nums[i])
           }
       }
   }
    return maxValue;
};