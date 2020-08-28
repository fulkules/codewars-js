// Your task is to add up letters to one letter.
//
//     The function will be given a variable amount of arguments,
//     each one being a letter to add.
//
//     Notes:
// Letters will always be lowercase.
//     Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
//     addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing [25, 3, 2] -> 30 -> 30 - 26 = 4
// addLetters() = 'z'

// fn(arr) => str
// set alphabet string
// initialize a sum var
// iterate all letter args
    // accumulate a sum based on (indexOf + 1) of each char
// sum modulus 26 will be the indexOf the char needed to return

function addLetters(...letters){
    if(!letters.length) return 'z';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let sum = 25;
    for(let letter of letters){
        sum += alphabet.indexOf(letter) + 1;
    }
    return alphabet[sum % 26];
}

// refactor
// function addLetters(...letters) {
//   const alpha = 'zabcdefghijklmnopqrstuvwxy';
//   const sum = letters.reduce((sum, letter) => sum + alpha.indexOf(letter), 0) % 26;
//   return alpha[sum];
// }

module.exports = addLetters;