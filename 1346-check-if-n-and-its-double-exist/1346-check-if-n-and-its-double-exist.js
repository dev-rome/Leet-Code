/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
      if(obj[arr[i]] !== undefined) return true
      obj[arr[i] / 2] = arr[i]
      obj[arr[i] * 2] = arr[i]
    }
  return false
};