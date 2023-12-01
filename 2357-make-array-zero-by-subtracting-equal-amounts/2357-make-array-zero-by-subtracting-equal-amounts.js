/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;
    let set = [...new Set(nums)];
    for(let i = 0; i < set.length; i++) {
        if(set[i]) count++;
    }
    return count;
};