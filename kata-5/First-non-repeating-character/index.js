// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    const index = s.toLowerCase().split('').findIndex((char, _, s) => s.indexOf(char) === s.lastIndexOf(char))
    return index === -1 ? '' : s[index]
}

// IE compatible refactor (findIndex not supported in IE)
// function firstNonRepeatingLetter(s) {
//     let t=s.toLowerCase();
//     for (let i=0; i<t.length; i++){
//         if(t.indexOf(t[i]) === t.lastIndexOf(t[i])){
//             return s[i];
//         }
//     }
//     return "";
// }

module.exports = firstNonRepeatingLetter;