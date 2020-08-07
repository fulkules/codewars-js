// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language)
// that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
//
//     a power of two is a number of the form 2n where n is an integer, i.e. the result of
// exponentiation with number two as the base and integer n as the exponent.
//
//     You may assume the input is always valid.

// fn(num) => boolean
// use Math.log2


function isPowerOfTwo(n) {
    return Math.log2(n) % 1 === 0;
}

// best practice
// function isPowerOfTwo(n){
//     return Number.isInteger(Math.log2(n));
// }

// using bitwise AND operator
// function isPowerOfTwo(n) {
//   return n === 0 ? false : (n & (n - 1)) == 0
// }

module.exports = isPowerOfTwo;