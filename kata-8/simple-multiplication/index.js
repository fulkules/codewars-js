// This kata is about multiplying a given number
// by eight if it is an even number and by nine otherwise.

// fn(num) => num
// test if num is even or odd
// perform mathematical function

function simpleMultiplication(num){
    return num % 2
                ? (num * 9)
                : (num * 8)
}

// best practice
// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }

module.exports = simpleMultiplication;