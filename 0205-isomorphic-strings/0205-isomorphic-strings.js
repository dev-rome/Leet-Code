/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    let sStr = new Map();
    let tStr = new Map();
    
    for(let i = 0; i < s.length; i++) {
        sStr.set(s[i], t[i]);
        tStr.set(t[i], s[i]);
    }
    
    for(let i = 0; i < s.length; i++) {
        if(sStr.get(s[i]) !== t[i] || tStr.get(t[i]) !== s[i]) {
            return false;
        }
    }
    return true;
};