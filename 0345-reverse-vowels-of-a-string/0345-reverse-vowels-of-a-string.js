/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let strArr = s.split("");
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (!vowels.has(strArr[start])) {
      start++;
    } else if(!vowels.has(strArr[end])) {
      end--;
    } else {
      let temp = strArr[start];
      strArr[start] = strArr[end];
      strArr[end] = temp;
      start++
      end--
    }
  }
  return strArr.join("");
};