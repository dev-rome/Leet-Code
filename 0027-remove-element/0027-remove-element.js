/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const len = nums.length;
    let i = 0;
    while (i < len) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        } else {
            i++;
        }
    }
    return len;
};