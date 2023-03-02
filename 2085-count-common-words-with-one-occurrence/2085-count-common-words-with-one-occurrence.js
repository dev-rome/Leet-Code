/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
  let count = 0;
  const obj1 = {};
  const obj2 = {};

  for (let val of words1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (let val of words2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let value in obj1) {
    if (obj1[value] === 1 && obj2[value] === 1) {
      count++;
    }
  }
  return count;
};