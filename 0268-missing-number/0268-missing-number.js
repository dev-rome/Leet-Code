/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sortNums = nums.sort((a, b) => a - b);
    for(let i = 0; i < sortNums.length; i++) {
        if(i !== sortNums[i]) {
            return i;
        }
    }
    return sortNums.length;
};