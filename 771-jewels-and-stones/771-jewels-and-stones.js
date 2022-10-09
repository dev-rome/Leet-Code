/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    let current = jewels[i];
    for (let j = 0; j < stones.length; j++) {
      if (current === stones[j]) {
        count++;
      }
    }
  }
  return count;
};