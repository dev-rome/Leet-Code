/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let obj = {};
  let sum = 0;
  for (const num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] === 1) sum += +key;
  }
  return sum;
};