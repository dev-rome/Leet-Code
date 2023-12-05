/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  const numMap = new Map();
    for(const num of nums) {
        if(numMap.has(num)) {
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    }
    for(const [key, value] of numMap.entries()) {
        if(value > 1) return key;
    }
};