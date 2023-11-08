/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let j = 0;
    let maxValue = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[j] > prices[i]) {
            j = i;
        } else if(prices[j] < prices[i]) {
            maxValue = Math.max(maxValue, prices[i] - prices[j]);
        }
    }
    return maxValue;
};