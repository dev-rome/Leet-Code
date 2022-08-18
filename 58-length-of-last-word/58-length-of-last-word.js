/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word = s.trim();
    let words = word.split(" ");
    let lastWord = "";
    for(let i = 0; i < words.length; i++) {
        lastWord = words[words.length - 1];
    }
        return lastWord.length;
};