/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const arr1 = [];
  const arr2 = [];
  const obj1 = {};
  const obj2 = {};

  for (const num of nums1) {
    obj1[num] = (obj1[num] || 0) + 1;
  }

  for (const num of nums2) {
    obj2[num] = (obj2[num] || 0) + 1;
  }

  for (const key in obj1) {
    if (!obj2[key]) {
      arr1.push(+key);
    }
  }

  for (const key in obj2) {
    if (!obj1[key]) {
      arr2.push(+key);
    }
  }
  return [arr1, arr2];
};