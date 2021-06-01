// Create a function that takes 2 positive integers in form of a string as an input,
// and outputs the sum (also as a string):
//
// Example: (Input1, Input2 -->Output)
//
// "4",  "5" --> "9"
// "34", "5" --> "39"
// Notes:
//
// If either input is an empty string, consider it as zero.

// fn(str, str) => str
// convert params to nums
// perform addition (not concatenation)
// convert result back to number

function sumStr(a, b){
    let res = Number(a) + Number(b);
    return String(res);
}

// shortened refactor
// function sumStr(a, b){
//     return String(Number(a) + Number(b));
// }

module.exports = sumStr;