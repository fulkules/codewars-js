// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):

// fn(num) => boolean

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

// need to split the numbers
    // need to get the length
    // need to multiply each split digit to the power of the length
    // need to add all of these and compare them to the orig val

const narcissistic = value => {
    let strVal = value.toString().split('');
    let len = strVal.length;
    let newArr = [];
    strVal.forEach(num => {
      newArr.push(parseInt(Math.pow(num, len)));
    })
    let newTotal = newArr.reduce((acc,cur) => acc+cur);
    return newTotal === value ? true : false;
}

// refactor
// function narcissistic(value) {
//   return value.toString()
//   .split('')
//   .map( (x,i,arr) => x ** arr.length)
//   .reduce( (a,b)=> +a + +b) 
//    === value
// }

module.exports = narcissistic;