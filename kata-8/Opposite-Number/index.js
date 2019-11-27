// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// function opposite(number){
//     return number < 0
//         ? Math.abs(number)
//         : -Math.abs(number)
// }

// refactor
function opposite(number){
    return (-number);
}

module.exports = opposite;