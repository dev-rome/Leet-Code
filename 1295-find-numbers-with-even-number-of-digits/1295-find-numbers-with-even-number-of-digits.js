/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i].toString().length;
        if(current % 2 === 0) count++;
    }
    return count;
};