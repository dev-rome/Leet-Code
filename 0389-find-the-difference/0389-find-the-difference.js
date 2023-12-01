/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const charFrequency = {};
    for (const char of s) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    for (const char of t) {
        charFrequency[char] = (charFrequency[char] || 0) - 1;
    }
    for (const char in charFrequency) {
        if (charFrequency[char] !== 0) {
            return char;
        }
    }
};