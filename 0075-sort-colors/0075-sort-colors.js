/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    function pivot(arr, left, right) {
        const pivotIndex = Math.floor((left + right) / 2);
        const pivotValue = arr[pivotIndex];
        swap(arr, pivotIndex, right);
        let i = left;
        for (let j = left; j < right; j++) {
            if (arr[j] < pivotValue) {
                swap(arr, i, j);
                i++;
            }
        }
        swap(arr, i, right);
        return i;
    }
    
    function quicksort(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
            let index = pivot(arr, left, right);
            quicksort(arr, left, index - 1);
            quicksort(arr, index + 1, right);
        }
    }

    quicksort(nums);
    return nums;
}