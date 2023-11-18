/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let obj = new Map();
    let count = 0;    
    for(let i = 0; i < rings.length; i += 2) {
        if(!obj.has(rings[i + 1])) {
            obj.set(rings[i + 1], [rings[i]]);
        } else {
            obj.get(rings[i + 1]).push(rings[i]);
        }
    }
    for(const [key, values] of obj.entries()) {
        if(values.includes("B") && values.includes("R") && values.includes("G")) {
            count++;
        }
    }
    return count;
};