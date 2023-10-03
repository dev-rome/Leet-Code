/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let i = 0; i < strs.length; i++) {
       let sortedWord = strs[i].split("").sort().join("");
        if(!map[sortedWord]) {
            map[sortedWord] = [strs[i]];
        } else {
             map[sortedWord].push(strs[i]);
        }
    }
    return Object.values(map);
};