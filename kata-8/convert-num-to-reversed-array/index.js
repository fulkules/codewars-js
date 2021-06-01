// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

// fn(num) => arr
// turn num into string
// turn string into array
// reverse the array
// iterate array and convert strings back to nums

function digitize(n){
    let strArr = n.toString().split('').reverse();
    return strArr.map(num => parseInt(num));
}

module.exports = digitize;