/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   if(s.length !== t.length) return false;
   let str1 = {};
   let str2 = {};
    
    for(let val of s) {
        str1[val] = (str1[val] || 0) + 1;
    }
    
     for(let val of t) {
         str2[val] = (str2[val] || 0) + 1;
    }
    
    for(let key in str2) {
        if(!(key in str1)) return false;
        if(str2[key] !== str1[key]) return false;
    }
    return true;
};