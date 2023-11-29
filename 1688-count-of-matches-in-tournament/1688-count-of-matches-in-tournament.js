/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let results = 0;
    while(n > 1) {
        if(n % 2 === 0) {
            results += n / 2;
            n = n / 2;
        } else {
            results += (n - 1) / 2;
            n = (n - 1) / 2 + 1;
        }
    }
    return results;
};