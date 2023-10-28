/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
   let results = [];
   for(let i = 0; i < code.length; i++) {
       let sum = 0;
       if(k > 0) {
           for(let j = 1; j <= k; j++) {
               sum += code[(i + j) % code.length];
           }
       }
       if(k < 0) {
           for(let j = -1; j >= k; j-- ) {
               sum += code[(i + j + code.length) % code.length]; 
           } 
       }
       results.push(sum);
   }
     return results;
};