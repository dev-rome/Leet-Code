/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);

  let count = 0;
  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return count;
};