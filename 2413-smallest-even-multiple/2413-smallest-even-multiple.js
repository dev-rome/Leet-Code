/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  let num = n * 2;
  if (n % 2 === 0) {
    return n;
  } 
  return num;
};