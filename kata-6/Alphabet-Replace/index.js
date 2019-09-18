// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// fn(str) => str
// declare the alphabet in an array
// convert string to lower case
// remove all non-letter chars
// split the string 
// loop through string array
// match the char in the given str with the char in alphabet array
// push num into newArr (num will be (alphabet.indexOf("a") + 1) = 1)
// return new joined array with spaces in between the nums

function alphabetPosition(text){
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let strArr = text.toLowerCase().replace(/[\W_|\d]/g, "").split('')
    let newArr = strArr.map(char => {
      return alphabet.indexOf(char) + 1
    })
    return newArr.join(" ");
}

module.exports = alphabetPosition;