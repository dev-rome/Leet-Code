/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   let maxValue = 0;
    for(let i = 0; i < accounts.length; i++) {
         let sum = 0;
        for(let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        if(sum > maxValue) maxValue = sum;
    }
    return maxValue;
};