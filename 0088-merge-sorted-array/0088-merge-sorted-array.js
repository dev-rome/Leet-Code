/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let lastIndex = m + n - 1;
    while(second >= 0) {
        let firstValue = nums1[first];
        let secondValue = nums2[second];
        if(firstValue > secondValue) {
            nums1[lastIndex] = firstValue;
            lastIndex--;
            first--
        } else {
            nums1[lastIndex] = secondValue;
            lastIndex--;
            second--;
        }
    }
};