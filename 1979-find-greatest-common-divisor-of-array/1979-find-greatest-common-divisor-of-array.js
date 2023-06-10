/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
//   let min = nums[0];
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) max = nums[i];
//     if (nums[i] < min) min = nums[i];
//   }

//   function helperGCD(a, b) {
//     if (b === 0) return a
//     let prime = a % b;
//     return helperGCD(b, prime)
//   }
//   return helperGCD(min, max)
    
  let res = []
  let min = nums[0];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[i] < min) min = nums[i];
  }
  for(let j = 1; j <= min; j++) {
    if(min % j === 0 && max % j === 0) {
      res.push(j);
    }
  }
  return Math.max(...res)
};
    