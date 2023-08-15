/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const numCount = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(numCount.has(nums[i])) {
            numCount.delete(nums[i]);
        } else {
            numCount.set(nums[i], true);
        }
    }
    return numCount.size === 0;
};