/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const NOT_FOUND = [-1, -1];
    let start = 0;
    let end = nums.length - 1;
    let firstPosition = null;
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if(nums[mid] >= target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    firstPosition = start;
    start = 0;
    end = nums.length - 1;
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if(nums[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    if(nums[firstPosition] !== target) return NOT_FOUND;
    return [firstPosition, end];
};