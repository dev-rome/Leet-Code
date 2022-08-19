/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
   let str1 = "";
   let str2 = "";
    for(let letter of word1) {
        str1 += letter;
    }
    for(let letter of word2) {
        if(word2.length > 0) {
            str2 += letter
        }
    }
    if(str1 !== str2) {
        return false
    }
    return true
};