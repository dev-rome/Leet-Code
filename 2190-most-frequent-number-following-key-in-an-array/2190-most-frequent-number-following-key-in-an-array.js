/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    let obj = {};
    let count = 0;
    let item = null;
    for(let i = 0; i < nums.length; i++) {
        let target = nums[i + 1];
        if(nums[i] !== key) continue;
        obj[target] = (obj[target] || 0) + 1; 
        if(obj[target] > count) {
            count = obj[target];
            item = target;
        }
    }
    return item;
};