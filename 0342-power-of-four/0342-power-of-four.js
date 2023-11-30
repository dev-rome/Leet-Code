/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    for(let i = 0; i < n; i++) {
        if(4 ** i === n) {
            return true
        } else if(4 ** i > n) {
            break;
        }
    }
    return false;
};