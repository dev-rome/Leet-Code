/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.split(" ").join("").replace(/[^a-zA-Z0-9]/g, "");
    let i = 0;
    for(let j = s.length - 1; j >= 0; j--) {
        if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i++;
    }
    return true;
};