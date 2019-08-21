// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// For example, arr = [1,3,5,7,9]. Our minimum sum is 1+3+5+7 = 16 and our maximum sum is 3+5+7+9 = 24. We would print [16, 24].

//fn [1,3,5,7,9] => [16, 24]

let arr = [9,3,5,7,1]

function minMaxSum(arr) {
  arr.sort( (a, b) => a - b)
  let min = [...arr].splice(0,4);
  let max = [...arr].splice(1,5);
  let minSum = min.reduce( (acc, cur) => {
    return acc + cur
  }, 0)
  let maxSum = max.reduce( (acc, cur) => {
    return acc + cur
  }, 0)
  return [minSum, maxSum]
//   console.log(minSum, maxSum)
}

minMaxSum(arr)

module.exports = minMaxSum;