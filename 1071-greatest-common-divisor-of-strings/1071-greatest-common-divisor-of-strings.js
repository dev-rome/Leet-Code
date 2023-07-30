/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return "";
    
    let word1 = str1.length;
    let word2 = str2.length;
    
    function gcd(a, b) {
        if(b === 0) return a;
        let temp = a % b;
        return gcd(b, temp);
    }
    
    return str1.slice(0, gcd(word1, word2));
};