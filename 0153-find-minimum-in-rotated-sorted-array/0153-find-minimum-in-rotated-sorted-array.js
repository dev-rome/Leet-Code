/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end) {
        let midIndex = start + Math.floor((end - start) / 2);
        if(nums[midIndex] > nums[end]) {
            start = midIndex + 1;
        } else {
            end = midIndex;
        }
    }
    return nums[start];
};