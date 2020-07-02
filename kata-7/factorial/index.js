// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers
// less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
//
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of
// type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a
// RangeError (JavaScript) or ValueError (Python) or return -1 (C).
//
//     More details about factorial can be found here: https://www.wikiwand.com/en/Factorial

// fn num => num
// num = 5
// 5 * 4 * 3 * 2 * 1

// early return for n = 0 should be 1
// set up error msg if num is out of range
// iterate up to n
// multiply n by itself and each num between 0 => n
// return product of all multplications

// with recursion
function factorial(n){
    if (n < 0 || n > 12) throw new RangeError();
    if (n === 0) return 1;

    return n * factorial(n - 1);
}

// with for loop
// function factorialize(num) {
//   if (num === 0 || num === 1)
//     return 1;
//   for (let i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }

// with while loop
// function factorialize(num) {
//     let result = num;
//     if (num === 0 || num === 1)
//         return 1;
//     while (num > 1) {
//         num--;
//         result *= num;
//     }
//     return result;
// }

module.exports = factorial;