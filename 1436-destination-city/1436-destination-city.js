/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const cityMap = new Map();
    for(const [city, des] of paths) {
        cityMap.set(city, des);
    }
    for(const value of cityMap.values()) {
        if(!cityMap.has(value)) return value;
    }
};