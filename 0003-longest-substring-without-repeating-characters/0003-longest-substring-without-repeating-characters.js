/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let maxLength = 0;
    let charMap = new Map();
    for(let i = 0; i < s.length; i++) {
        let letter = s[i];
        if(charMap.get(letter) >= start) start = charMap.get(letter) + 1;
        charMap.set(letter, i);
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
};