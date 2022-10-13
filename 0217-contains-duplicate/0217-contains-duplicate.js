/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let num = new Set(nums)
    // if(nums.length !== num.size) {
    //     return true
    // }
    // return false
    
    let obj = {}
    for(const num of nums) {
        obj[num] = (obj[num] || 0) + 1
    }
    
    for(const key in obj) {
        if(obj[key] > 1) return true
    }
    return false
};