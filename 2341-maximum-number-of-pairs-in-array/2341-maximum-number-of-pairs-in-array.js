/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  const map = {};
  let pairCount = 0;
  let leftOver = 0;

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
    if (map[num] % 2 === 0) {
      pairCount++;
    }
  }


  for (const key in map) {
    if (map[key] % 2 !== 0) {
      leftOver++;
    } 
  }
  return ([pairCount, leftOver]);
};