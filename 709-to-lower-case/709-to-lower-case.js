/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s[i].toUpperCase()) {
            return s.toLowerCase();
        }
    }
};