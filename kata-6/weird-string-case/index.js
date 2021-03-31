// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns
// the same string with all even indexed characters in each word upper cased, and all odd
// indexed characters in each word lower cased. The indexing just explained is zero based,
// so the zero-ith index is even, therefore that character should be upper cased.
//
// The passed in string will only consist of alphabetical characters and spaces(' ').
// Spaces will only be present if there are multiple words. Words will be separated
// by a single space(' ').
//
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// fn(str) => str
// initialize an empty str
// separate the string into array of words and iterate
// separate the word into array of letters
    // if the idx position is odd build str with lowerCase letter
    // if idx pos is even build str with upperCase letter
// return built string

function toWeirdCase(string){
    let strArr = string.split(' '),
        newStr = '';
    for(let i = 0; i < strArr.length; i++){
        if(i) newStr += ' ';
        for(let j = 0; j < strArr[i].length; j++){
            if(j % 2){
                // odd
                newStr += strArr[i].charAt(j).toLowerCase();
            } else {
                // even
                newStr += strArr[i].charAt(j).toUpperCase();
            }
        }
    }
    return newStr;
}

// best practice
// function toWeirdCase(string){
//   return string.split(' ').map(function(word){
//     return word.split('').map(function(letter, index){
//       return index % 2 ? letter.toLowerCase() : letter.toUpperCase()
//     }).join('');
//   }).join(' ');
// }


// interesting solution with pure functions
// function toWeirdCaseCharacter(chr, index){
//   return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
// }
//
// function toWeirdCaseWord(word){
//   return word.split("").map(toWeirdCaseCharacter).join("");
// }
//
// function toWeirdCase(string){
//   return string.split(" ").map(toWeirdCaseWord).join(" ");
// }

module.exports = toWeirdCase;