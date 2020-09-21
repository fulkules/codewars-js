// In mathematics, the factorial of integer 'n' is written as 'n!'.
// It is equal to the product of n and every integer preceding it.
// For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
//
// Your mission is simple: write a function that takes an integer
// 'n' and returns 'n!'.
//
//     You are guaranteed an integer argument. For any values outside
//     the positive range, return null, nil or None .
//
//     Note: 0! is always equal to 1. Negative values should return null;
//
// For more on Factorials : http://en.wikipedia.org/wiki/Factorial

// fn(num) => num
// iterate down to 1 from n
// accumulate the product of i * n in each loop
// return the accumulation

function factorial(n){
    if(n < 0) return null;
    if(n === 0) return 1;
    let product = n;
    while(n > 2){
        product *= (n-1);
        n--;
    }
    return product;
}

// refactor - best practice using recursion
// function factorial (n) {
//   if (n < 0) return null;
//   if (n === 0) return 1;
//   return n * factorial(n-1);
// }

module.exports = factorial;