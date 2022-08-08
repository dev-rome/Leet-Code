/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let j = 1;
    while(true) {
         if(nums[i] + nums[j] === target) {
             break;
       } else {
           if(j === nums.length - 1) {
            i++
            j = i + 1;
        } else {
            j++
        }
       }
    }
    return [i, j];
};