/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let input = x.toString();
let i = 0;
let j = input.length - 1;
while(j >= i) {
    if(input[i] !== input[j]) {
        return false
    }
    i++
    j--
}
   return true 
};