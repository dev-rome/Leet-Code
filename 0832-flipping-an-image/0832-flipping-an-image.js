/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
      let start = 0;
      let end = image[i].length - 1;
      while (start < end) {
        let temp = image[i][start];
        image[i][start] = image[i][end];
        image[i][end] = temp;
        start++;
        end--;
      }
    }

    for (let i = 0; i < image.length; i++) {
      for (let j = 0; j < image[i].length; j++) {
        if (image[i][j] === 0) {
          image[i][j] = 1;
        } else if (image[i][j] === 1) {
          image[i][j] = 0;
        }
      }
    }
  return image;
};