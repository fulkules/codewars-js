// Your task is to write function findSum.
//
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
//
// For example:
//
//     findSum(5) should return 8 (3 + 5)
//
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// fn(num) => num
// initialize a sum variable
// iterate up to num
// if num is divisible by 3 or 5, add that number to the sum
// return the sum

function findSum(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        if (!(i % 3) || !(i % 5)) sum += i;
    }
    return sum;
}

// refactor using array.prototype.reduce
// function findSum(n) {
//     return Array.from({length: n}, (a, b) => b+1)
//         .reduce(function(curSum, val) {
//             return !(val % 5 && val % 3) ? curSum + val : curSum;
//         }, 0)
// }

module.exports = findSum;