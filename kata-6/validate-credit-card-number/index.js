// In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.
//
// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
//
// Here is the algorithm:
//
// Double every other digit, scanning from right to left, starting from the second digit (from the right).
//
// Another way to think about it is: if there are an even number of digits, double every other digit starting with the first;
// if there are an odd number of digits, double every other digit starting with the second:
//
// 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]
//
// 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
//
// 891 ==> [8, 9*, 1] ==> [8, 18, 1]
// If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
//
// [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]
//
// or:
//
// [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
// Sum all of the final digits:
//
// [8, 9, 1] ==> 8 + 9 + 1 = 18
// Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
//
// 18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number


// fn(num) => boolean
// convert num to array of nums
// iterate the array
// if even length
    // double every other digit starting with 1st
// if odd length
    // double every other digit starting with the 2nd
// if a num is over 9 replace it with sum of its own digits (same as subtracting 9)
// get the sum of all numbers in the modified array
// divide the sum by 10, if equals 0, num is valid


const validate = num => {
    let numArr = Array.from(String(num), Number);

    if (numArr.length % 2 === 0) {
        for(let i = 0; i< numArr.length; i+=2) {
            numArr[i] *= 2;
        }
    } else {
        for(let i = 1; i< numArr.length; i+=2) {
            numArr[i] *= 2;
        }
    }

    const lessThan18Arr = numArr.map(num => num > 9 ? num - 9 : num);

    const sum = lessThan18Arr.reduce((acc, elm) => acc + elm, 0);

    return sum % 10 === 0;
};

// best practice
// function validate(n){
//   var sum = 0;
//
//   while (n > 0) {
//     var a = n % 10;
//     n = Math.floor(n / 10);
//
//     var b = (n % 10) * 2;
//     n = Math.floor(n / 10);
//
//     if (b > 9) {
//       b -= 9;
//     }
//
//     sum += a + b;
//   }
//
//   return sum % 10 == 0;
// }

// alternate solution
// function validate(n) {
//   let str = "" + n;
//   return str.split('').reduce((acc, cur, i) => {
//     let num = str.length % 2 === 0 ? (i % 2 === 0 ? cur * 2 : +cur) : (i % 2 === 0 ? +cur : cur * 2);
//     return num > 9 ? num - 9 + acc : num + acc;
//   }, 0) % 10 === 0;
// }

module.exports = validate;