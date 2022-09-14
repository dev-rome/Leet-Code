/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = nums.sort((a, b) => {
        return a + b;
    });
    let numArr = [];
    for(let i = 0; i < arr.length; i++) {
       numArr.push(Math.pow(nums[i], 2));
    }
    return numArr;
    
};