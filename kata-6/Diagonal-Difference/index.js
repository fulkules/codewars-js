const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 1 + 5 + 9 => 15
// 3 + 5 + 7 => 15
// |15 - 15| => 0 (absolute difference)
// left = arr[0][0] + arr[1][1] + arr[2][2]
// right = arr[0][2] + arr[1][1] + arr[2][0]
// |right - left| = 0


function diagonalDiff(arr){
    // declare variables for function
  let dim = arr[0].length;
  let left = 0;
  let right = 0;
    // will need to loop through main array, and nested array
  for(let i = 0, j = (dim - 1); i < dim, j > -1; i++, j--){
      // add values to left_to_right variable: [0][0], [1][1], [2][2]...
      left += arr[i][i];
      // add values to rigth_to_left variable: [0][(last)], [1][(last - 1)], [2][(last - 2)]...
      right += arr[i][j];
  }
  // return the absolute diff of right - left
  return Math.abs(right - left);
}

diagonalDiff(arr)

module.exports = diagonalDiff;