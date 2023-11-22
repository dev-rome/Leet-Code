/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let results = [];
    let prefixNumLeft = 1;
    let prefixNumRight = 1;
    
    for(let j = nums.length - 1; j >= 0; j--) {
        results[j] = prefixNumRight;
        prefixNumRight *= nums[j];
    }
    
    for(let i = 0; i < nums.length; i++) {
        results[i] *= prefixNumLeft;
        prefixNumLeft *= nums[i];
    }
    
    return results;
};