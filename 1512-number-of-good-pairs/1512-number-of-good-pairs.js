/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
let obj = {};
let count = 0;

for (const num of nums) {
  obj[num] = (obj[num] || 0) + 1;
}

for (const num in obj) {
  const occurrences = obj[num];
  count += (occurrences * (occurrences - 1)) / 2;
}
    return count
};