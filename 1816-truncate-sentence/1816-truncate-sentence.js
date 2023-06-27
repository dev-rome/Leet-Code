/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let strArray = s.split(" ");
    let truncateStr = strArray.slice(0, k);
    return truncateStr.join(" ");
};