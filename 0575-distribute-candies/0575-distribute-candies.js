/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let uniqueCandies = new Set(candyType).size;
    let upperLimit = candyType.length / 2;
    
    return Math.min(uniqueCandies, upperLimit);
};