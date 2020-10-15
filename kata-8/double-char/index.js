// Given a string, you have to return a string in which each
// character (case-sensitive) is repeated once.
//
// doubleChar("String") ==> "SSttrriinngg"
//
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
//
// doubleChar("1234!_ ") ==> "11223344!!__  "

// fn(str) => str

function doubleChar(str){
    let doubled = '';
    for(let i = 0; i < str.length; i++){
        doubled += `${str.charAt(i)}${str.charAt(i)}`;
    }
    return doubled;
}

// best practice
// const doubleChar = (str) => str.split("").map(c => c + c).join("");

// regex str.replace() solution
// function doubleChar(str) {
//   return str.replace(/(.)/g, "$1$1")
// }

module.exports = doubleChar;