/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    const middle = Math.floor(nums.length / 2);
    const leftHalf = nums.slice(0, middle);
    const rightHalf = nums.slice(middle);
    const sortLeft = sortArray(leftHalf)
    const sortRight = sortArray(rightHalf);
    return merge(sortLeft, sortRight)
    
    function merge(left, right) {
        let results = [];
        let i = 0;
        let j = 0;
        
        while(i < left.length && j < right.length) {
            if(left[i] < right[j]) {
                results.push(left[i]);
                i++;
            } else {
                results.push(right[j]);
                j++;
            }
        }
        while(i < left.length) {
            results.push(left[i]);
            i++;
        }
        while(j < right.length) {
            results.push(right[j]);
            j++;
        }
        return results;
    }
};