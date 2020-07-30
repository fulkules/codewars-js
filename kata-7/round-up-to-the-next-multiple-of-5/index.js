// Given an integer as input, can you round it to the next (meaning, "higher") 5?
//
//     Examples:
//
//     input:    output:
//     0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
//     Input may be any positive or negative integer (including 0).
//
// You can assume that all inputs are valid integers.

// fn(int) => int
// Take the number in a variable.
// Divide it by 5 and get the decimal value.
// Take the ceil value of the decimal value by using math. ceil().
// Multiply it by 5 to get the result.

function roundToNext5(n){
    return parseInt(Math.ceil(n / 5) * 5);
}

// clever solution
// function roundToNext5(n){
//   while(n % 5 !== 0) n++;
//   return n;
// }

module.exports = roundToNext5;