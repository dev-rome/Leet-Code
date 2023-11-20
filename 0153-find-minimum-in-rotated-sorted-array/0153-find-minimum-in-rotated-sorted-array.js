/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let minValue = Infinity;
    while(start <= end) {
        let midIndex = start + Math.floor((end - start) / 2);
        if(nums[midIndex] <= nums[end]) {
            minValue = Math.min(minValue, nums[midIndex]);
            end = midIndex - 1;
        } else {
            minValue = Math.min(minValue, nums[midIndex]);
            start = midIndex + 1;
        }
    }
    return minValue;
};