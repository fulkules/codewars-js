// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #18
//
// Create a function called that accepts 2 string arguments
// and returns an integer of the count of occurrences the
// 2nd argument is found in the first one.
//
//     If no occurrences can be found, a count of 0 should be returned.
//
// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z')      // => 0
// Notes:
//
//     The first argument can be an empty string
// The second string argument will always be of length 1

// fn(str, str) => num
//

function strCount(str, letter){
    let count = 0;
    str.split('').map(char => char === letter ? count++ : null);
    return count;
}

// best practice
// function strCount(str, letter){
//   return str.split(letter).length-1
// }

// String.prototype.replace() with regex
// function strCount(str, letter) {
//   return str.length - str.replace(new RegExp(letter, "gi"), '').length;
// }

module.exports = strCount;