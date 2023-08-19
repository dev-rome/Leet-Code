/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {    
    function mergeArray(left, right) {
        let results = [];
        let i = 0;
        let j = 0;
        
        while(i < left.length && j < right.length) {
            if(left[i] < right[j]) {
                results.push(left[i])
                i++
            } else {
                results.push(right[j])
                j++
            }
        }
        
        while(i < left.length) {
            results.push(left[i])
            i++
        }
        
        while(j < right.length) {
            results.push(right[j])
            j++
        }
        return results;
    }
    if(nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
        
    return mergeArray(left, right)
};