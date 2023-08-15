/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
  const charMap = new Map();
  let count = 0;

  for (const word of words) {
    const sortedChars = [...new Set(word)].sort().join("");
    if (charMap.has(sortedChars)) {
      count += charMap.get(sortedChars);
      charMap.set(sortedChars, charMap.get(sortedChars) + 1);
    } else {
      charMap.set(sortedChars, 1);
    }
  }

  return count;
};