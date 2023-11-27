/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for(let i = 0; i <= n; i++) {
        if (Math.pow(2, i) === n) {
            return true;
        } else if (Math.pow(2, i) > n) {
            break;
        }
    }
    return false;
};