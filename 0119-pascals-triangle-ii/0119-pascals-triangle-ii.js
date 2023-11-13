/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let results = [[1]];
    for(let i = 1; i <= rowIndex; i++) {
        results[i] = [];
        for(let j = 0; j < i + 1; j++) {
            results[i][j] = (results[i - 1][j] || 0) + (results[i - 1][j - 1] || 0);
        }
    }
    return results[rowIndex];
};