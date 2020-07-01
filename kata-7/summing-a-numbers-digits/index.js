// Write a function named sumDigits which takes a number as input and returns the sum
// of the absolute value of each of the number's decimal digits. For example:
//
// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.

// function signature
    // fn num => num

// pseudocode
    // convert absolute num to string
    // split string
    // iterate string
    // convert to num
    // add digits
    // return total

function sumDigits(num){
    let total = 0;
    Math.abs(num)
        .toString()
        .split('')
        .map(n => total += Number(n));
    return total;
}

// single line refactor with reduce
// const sumDigits = num => Math.abs(num).toString().split('').reduce((a,b) => {return +a + +b}, 0);

module.exports = sumDigits;