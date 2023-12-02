/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freqCount = new Map();
    let max = -1;
    for(const num of arr) {
        if(!freqCount.has(num)) {
            freqCount.set(num, 1);
        } else {
            freqCount.set(num, freqCount.get(num) + 1);
        }
    }
    
    for (const [key, value] of freqCount.entries()) {
        const numKey = Number(key);
        if (numKey === value && numKey > max) {
            max = numKey;
        }
    }
    return max;
};