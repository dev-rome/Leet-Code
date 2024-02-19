/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsObj = {}
    for(let i = 0; i < nums.length; i++) {
        const output = target - nums[i];
        if(output in numsObj) {
            return [numsObj[output], i]
        }
        numsObj[nums[i]] = i
    }
    
};