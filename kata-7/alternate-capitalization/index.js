// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
//     and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!

// fn(string) => array
// initialize 2 empty string variables
// convert the s arg to array
// iterate the array
// build the strings alternating upper/lower on each loop at odd/even idx
// return the two strings inside an array

function capitalize(s){
    let str1 = '', str2 = '';
    s.split('').map( (char, i) => {
        if(i % 2 === 0){
            str1 += char.toUpperCase();
            str2 += char.toLowerCase();
        } else {
            str2 += char.toUpperCase();
            str1 += char.toLowerCase();
        }
    });
    return [str1, str2];
}

// refactor -- best practice
// function capitalize(s){
//   const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
//   const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
//   return [even, odd];
// };

module.exports = capitalize;