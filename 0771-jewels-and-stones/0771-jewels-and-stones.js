/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let obj = {};
  let count = 0;

  for (const jewel of jewels) {
    obj[jewel] = true;
  }
  for (const stone of stones) {
    if (obj[stone]) count++;
  }
  return count;
};