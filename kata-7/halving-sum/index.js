// Task
// Given a positive integer n, calculate the following sum:
//
//     n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
//
//     Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

// fn(num) => num
// initialize sum arg to starting num
// while n > 0
    // add n/2 (rounded down to nearest int) to sum
    // reset n to n/2
// return the sum

function halvingSum(n){
    let sum = n;
    while(n > 0){
        sum += Math.floor(n/2);
        n = n/2;
    }
    return sum;
}

// recursion solution
// function halvingSum(n) {
//     if(n === 1) return n;
//     return n + halvingSum(Math.floor(n/2));
// }

module.exports = halvingSum;