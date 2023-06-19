/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
      let leftSum = [];
  let rightSum = [];
  let arr = [];
  let leftRunSum = 0;
  let rightRunSum = 0;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    leftSum[i] = leftRunSum;
    leftRunSum += nums[i];

    rightSum[j] = rightRunSum;
    rightRunSum += nums[j];
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = leftSum[i] - rightSum[i];

    if (diff > 0) {
      arr.push(diff);
    } else {
      arr.push(-diff);
    }
  }
  return arr;
};