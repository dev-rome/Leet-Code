/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let num = n.toString().split("");
    let sum = 0;
    let product = 1;
    for(let i = 0; i < num.length; i++) {
        product *= parseInt(num[i]);
        sum += parseInt(num[i]);
    }
    return product - sum;
};