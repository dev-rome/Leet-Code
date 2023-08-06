/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let arr = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];
    let map = {};
    let results = [];
    
    for(let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }
    
    for(key in map) {
        if(map[key] >= 2) {
            results.push(key);
        }
    }
    return results;
};