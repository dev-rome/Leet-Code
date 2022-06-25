/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
// create a empty object to store count and letter
    let letterCount = {}
// loop thru string
    for( let i = 0; i < s.length; i++) {
        let char = s[i]
        letterCount[char] = letterCount[char] + 1 || 1
    }
// update object to letter and count
// loop thru sting
    for( let i = 0; i < s.length; i++) {
        let char = s[i]
        if(letterCount[char] === 1) {
            return i
        }
    }
// check object to see if there is a count of 1
// if so return index
// return -1
    return -1
};