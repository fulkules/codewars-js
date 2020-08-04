// Task
// Given a string str, reverse it omitting all non-alphabetic characters.
//
//     Example
// For str = "krishan", the output should be "nahsirk".
//
//     For str = "ultr53o?n", the output should be "nortlu".
//
//     Input/Output
//     [input] string str
//
// A string consists of lowercase latin letters, digits and symbols.
//
//     [output] a string

// fn(str) => str
// regex match alphabetic chars
// reverse the string
// join the string
// return the array

function reverseLetter(str){
    return str.match(/[a-z]/gi)
                .reverse()
                .join('');
}

// using filter method
// const reverseLetter = str =>
//   [...str]
//     .filter(char => /[a-z]/gi.test(char))
//     .reverse()
//     .join('')

module.exports = reverseLetter;