// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// [0,3,4,5]
// [0*0, 3*3, 4*4, 5*5]
// [0, 9, 16, 25]
// 0 + 9 + 16 + 25 = 50

function squareSum(nums){
    if(nums.length < 1) return 0;
    return nums.map(num => num * num).reduce((a,b)=>a+b);
}

// refactor with foreach
// function squareSum(nums){
//     let sum = 0;
//     nums.forEach(n => {
//         sum += n * n
//     })
//     return sum;
// }

module.exports = squareSum;