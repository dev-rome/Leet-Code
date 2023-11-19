/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 1;
    let end = x;
    
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if(mid * mid === x) {
            return mid;
        } else if(mid * mid < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return end;
};