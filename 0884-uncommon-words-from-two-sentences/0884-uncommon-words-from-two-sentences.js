/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  let arr = [];
  let obj = {};

  for (let word of s1.split(" ")) {
    obj[word] = (obj[word] || 0) + 1;
  }

  for (let word of s2.split(" ")) {
    obj[word] = (obj[word] || 0) + 1;
  }

  for (let [key, value] of Object.entries(obj)) {
    if (value === 1) {
      arr.push(key);
    }
  }
  return arr;
};