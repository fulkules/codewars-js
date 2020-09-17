// Find the greatest common divisor of two positive integers.
// The integers can be large, so you need to find a clever solution.
//
// The inputs x and y are always greater or equal to 1, so the
// greatest common divisor will always be an integer that is also
// greater or equal to 1.

// In mathematics, the greatest common divisor (gcd) of two or more
// integers, which are not all zero, is the largest positive integer
// that divides each of the integers. For two integers x, y, the
// greatest common divisor of x and y is denoted
// {\displaystyle \gcd(x,y)}{\displaystyle \gcd(x,y)}.
// For example, the gcd of 8 and 12 is 4, that is,
// {\displaystyle \gcd(8,12)=4}{\displaystyle \gcd(8,12)=4}

// Example
// greatest common divisors can be computed by determining the
// prime factorizations of the two numbers and comparing factors,
// as in the following example: to compute gcd(18, 84), we find the
// prime factorizations 18 = 2 · 32 and 84 = 22 · 3 · 7, and since
// the "overlap" of the two expressions is 2 · 3, gcd(18, 84) = 6.
// In practice, this method is only feasible for small numbers;
// computing prime factorizations in general takes far too long.

// fn(num, num) => num
// Our base case is when y is equal to 0. In this case, we return x.
//
// When we're recursing, we swap the input arguments but we pass
// the remainder of x / y as the second argument.

function mygcd(x, y){
    if(!y){
        return x;
    }
    return mygcd(y, (x % y));
}

// best practice
// function mygcd(x,y){
//   return y == 0 ? x : mygcd(y, x % y)
// }

module.exports = mygcd;