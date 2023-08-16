/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const duplicateNum = {};
    const results = [];
    
  for(const num of nums) {
      duplicateNum[num] = (duplicateNum[num] || 0) + 1;
  }
    
  for(const key in duplicateNum) {
      if(duplicateNum[key] > 1) {
          results.push(key);
      }
  }
    
    return results;
};