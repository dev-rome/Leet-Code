/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let posNum = 0;
    let negNum = 0;
    let max = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) posNum++
        if(nums[i] < 0) negNum++
    }
    (posNum > negNum) ? max = posNum : max = negNum;

    return max
};