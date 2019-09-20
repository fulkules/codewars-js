// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// fn(num, num) => num
// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// convert first num to string and assign to a var
// store the length into a var
// initialize a result var to 0
// iterate up to length var
    // convert the string @ position `i` into nums
    // store the power of the nums, and power + 1 as the result
// store the power of args n & p into a var
// if the result is equal to the power of args var 
    // return the power
// if the result can be divided evenly by the first arg 
    // return the result 
// otherwise return -1




function digPow(n, p){
    let string = n.toString();
    let result = 0;
    for(var i = 0; i < string.length; i++) {
      var nums = parseInt(string.charAt(i));
      result +=  Math.pow(nums, p + i)
    }
    let x = Math.pow(n,p);
    if(result === x){
      return p;
    } else if(result % n === 0) {
      return result / n;
    }else {
      return -1;  
    }
}

// refactor 
// function digPow(n, p) {
//     let x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//     return x % n ? -1 : x / n
// }

module.exports = digPow;