/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(" ").map((word) => {
        return word.split("").reverse().join("");
    });
    return str.join(" ");
};