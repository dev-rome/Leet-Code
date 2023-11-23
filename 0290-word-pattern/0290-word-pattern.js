/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(" ");
    if(pattern.length !== s.length) return false;
    let patMap = new Map();
    let strMap = new Map();
    
    for(let i = 0; i < pattern.length; i++) {
        strMap.set(s[i], pattern[i]);
        patMap.set(pattern[i], s[i]);
    }
    
    for(let i = 0; i < pattern.length; i++) {
        if (patMap.get(pattern[i]) !== s[i] || pattern[i] !== strMap.get(s[i])) {
            return false;
        }
    }
    
    return true;
};