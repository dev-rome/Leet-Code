/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  let strArr = s.split("");
  let start = 0;
  let end = s.length - 1;
  const nonEnglishRegex = /^[a-zA-Z]$/;
  while (start < end) {
   if (!nonEnglishRegex.test(strArr[start])) {
      start++;
      continue;
    }
    
    if (!nonEnglishRegex.test(strArr[end])) {
      end--;
      continue;
    }
    
    [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
    start++;
    end--;
  }
  return strArr.join("");
};