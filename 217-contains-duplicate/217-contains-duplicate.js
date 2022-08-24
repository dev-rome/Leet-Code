/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let num = new Set(nums)
    if(nums.length !== num.size) {
        return true
    }
    return false
};