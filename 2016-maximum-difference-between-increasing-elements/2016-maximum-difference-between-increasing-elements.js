/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let maxValue = -1;
    let i = 0, j = 1;
    while(j < nums.length) {
        if(nums[i] < nums[j]) {
            maxValue = Math.max(maxValue, nums[j] - nums[i]);
        } else {
            i = j;
        }
        j++;
    }
    return maxValue;
};