/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let results = [[1]];
    for(let i = 1; i < numRows; i++) {
        results[i] = [];
        for(let j = 0; j < i + 1; j++) {
            results[i][j] = (results[i - 1][j] || 0) + (results[i - 1][j -1] || 0) 
        }
    }
    return results;
};