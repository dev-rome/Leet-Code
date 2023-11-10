/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let obj = {};
    for(let [value, weight] of [...items1, ...items2]) {
        if(!obj[value]) obj[value] = weight;
        else obj[value] += weight;
    }
    return Object.entries(obj);
};