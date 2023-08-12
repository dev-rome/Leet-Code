/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  const map = new Map();  
  let count = 0;

  for (const word of words) {
    const reverseWord = word[1] + word[0];

    if (map.has(reverseWord)) {
      count += map.get(reverseWord);
    }

    map.set(word, (map.get(word) || 0) + 1);
  }

  return count;
};