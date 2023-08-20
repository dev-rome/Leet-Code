/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let sortArr = [];
    let strArr = s.split(" ");
    
    for(const word of strArr) {
        let index = word[word.length - 1] - 1;
        sortArr[index] = word.slice(0, -1);
    }
    return sortArr.join(" ");
};