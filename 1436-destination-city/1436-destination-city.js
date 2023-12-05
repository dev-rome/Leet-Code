/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const cityMap = new Map();
    for(const [city, des] of paths) {
        cityMap.set(city, des);
    }
    for(const [city, des] of cityMap) {
        if(!cityMap.has(des)) return des;
    }
};