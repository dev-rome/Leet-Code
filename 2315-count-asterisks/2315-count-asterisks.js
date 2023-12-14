/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let verticalCount = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "|") verticalCount++;
        if(verticalCount % 2 === 0 && s[i] === "*") count++; 
    }
    return count;
};