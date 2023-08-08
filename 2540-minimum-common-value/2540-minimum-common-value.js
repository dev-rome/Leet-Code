/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  const arr = [...new Set(nums1), ...new Set(nums2)];
  const map = {};
  let max = Infinity;

  for (const num of arr) {
    map[num] = (map[num] || 0) + 1;

    if (map[num] > 1 && num < max) {
      max = num;
    }
  }
  return max === Infinity ? -1 : max;
};