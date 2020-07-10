// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
//     Example:
// 348597 => [7,9,5,8,4,3]
// '348597' => '795843'
//

// fn(int) => array
// int to string
// split string
// reverse string
// iterate each char
// convert each to num

function digitize(n){
    return n.toString().split('').reverse().map(num => parseInt(num));
}

// best practice
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

module.exports = digitize;