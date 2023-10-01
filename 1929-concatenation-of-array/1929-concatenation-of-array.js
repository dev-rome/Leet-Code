/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i++) {
        arr[i] = nums[i];
        arr[i + nums.length] = nums[i];
    }
    return arr;
};