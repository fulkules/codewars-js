// Given the triangle of consecutive odd numbers:
//
//             1
//          3     5
//       7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
//
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8
// rowSumOddNumbers(3); // 7 + 9 + 11 = 8


// Long Solution
/*
function rowSumOddNumbers(n) {
  let starter = n * n - (n - 1)
  let result = 0
  let counter = 0
  while (counter < n) {
    if (starter % 2 !== 0) {
      result += starter
      counter++
    }
    starter++
  }
  return result
}
*/

// Short Solution
const rowSumOddNumbers = n => n ** 3;

module.exports = rowSumOddNumbers;