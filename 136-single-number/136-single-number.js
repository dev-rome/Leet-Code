/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = {};
  for (let val of nums) {
    num[val] = num[val] ? num[val] + 1 : 1;
  }

  for(let key in num) {
    if(num[key] === 1) {
      return key
    }
  }    
};