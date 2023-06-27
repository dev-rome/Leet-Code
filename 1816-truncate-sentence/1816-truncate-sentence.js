/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let strArray = s.split(" ");
    let test = strArray.slice(0, k);
    return test.join(" ")
};