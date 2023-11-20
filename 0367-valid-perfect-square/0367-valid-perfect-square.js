/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 1;
    let end = num;
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if(mid * mid === num && Number.isInteger(mid)) {
            return true;
        } else if(mid * mid < num) {
            start = mid + 1;
        } else {
            end = mid -1;
        }
    }
    return false;
};