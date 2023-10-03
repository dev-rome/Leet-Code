/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let removeSpace = s.trim();
    // let wordsArray = removeSpace.split(" ");
    // let lastWord = wordsArray[wordsArray.length - 1];
    // return lastWord.length;
  let lastWordLength = 0;
  let firstChar = false;
    
  for (let i = s.length - 1; i >= 0; i--) {
      if(firstChar & s[i] === " ") {
          break;
      }
      if(s[i] !== " ") {
          firstChar = true;
          lastWordLength++;
      }
  }
    return lastWordLength;
};