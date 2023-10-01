/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let arr = [];
    for(let i = 0; i < nums.length * 2; i++) {
        arr.push(nums[i % nums.length])
    }
    return arr;
};