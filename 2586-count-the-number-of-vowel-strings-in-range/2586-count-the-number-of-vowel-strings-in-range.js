/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0;
    let vowels = new Array("a", "e", "i", "o", "u");
    for(let i = left; i <= right; i++) {
        if(vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length - 1])) count++;
    }
    return count;
};