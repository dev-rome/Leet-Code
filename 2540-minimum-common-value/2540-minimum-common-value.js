/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  const arr = [...new Set(nums1), ...new Set(nums2)];
  const map = {};
  const max = Infinity;

  for (const num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  for (const key in map) {
    if (key < max && map[key] > 1) {
      return key;
    }
  }
    return -1;
};