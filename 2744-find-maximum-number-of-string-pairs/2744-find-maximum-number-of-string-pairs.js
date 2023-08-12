/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = i + 1; j < words.length; j++) {
      let reverseWord = words[j][1] + words[j][0];

      if (word === reverseWord) count++;
    }
  }
  return count;
};