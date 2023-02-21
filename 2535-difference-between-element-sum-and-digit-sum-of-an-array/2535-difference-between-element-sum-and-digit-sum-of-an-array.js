/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    let digitValue = nums.join("").split("");
    
    for(let i = 0; i < nums.length; i++) {
        elementSum += nums[i];
    }
    
    for(let j = 0; j < digitValue.length; j++) {
        digitSum += Number(digitValue[j]);
    }
    return Math.abs(elementSum - digitSum);
};