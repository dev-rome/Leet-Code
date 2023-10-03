/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let removeSpace = s.trim();
    let wordsArray = removeSpace.split(" ");
    let lastWord = wordsArray[wordsArray.length - 1];
    console.log(lastWord)
    return lastWord.length;
};