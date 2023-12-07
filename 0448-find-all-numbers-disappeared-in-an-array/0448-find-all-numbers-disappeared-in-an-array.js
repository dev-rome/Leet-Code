/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const numSet = new Set(nums);
    const missingNumbers = [];
    for(let i = 1; i <= nums.length; i++) {
        if(!numSet.has(i)) missingNumbers.push(i);
    }
    return missingNumbers;
};