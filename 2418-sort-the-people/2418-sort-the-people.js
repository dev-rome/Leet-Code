/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let obj = {};
    let results = [];
    for(let i = 0; i < heights.length; i++) {
        obj[heights[i]] = names[i];
    }
    const arr = Object.entries(obj);
    arr.sort((a, b) => b[0] - a[0]);
    for(let i = 0; i < arr.length; i++) {
        results.push(arr[i][1]);
    }
    return results;
};