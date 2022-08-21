/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {};
    for(const val of arr) {
        obj[val] = (obj[val] || 0) + 1;
    }
    const output = Object.values(obj);
    return output.length == new Set(output).size
};