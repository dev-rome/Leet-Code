/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashStr = {};
    
    for(let i = 0; i < strs.length; i++) {
        const sortedWord = strs[i].split("").sort().join("");
        
        if(!hashStr[sortedWord]) {
            hashStr[sortedWord] = [strs[i]];
        } else {
            hashStr[sortedWord].push(strs[i]);
        }
    }
    return Object.values(hashStr);
};