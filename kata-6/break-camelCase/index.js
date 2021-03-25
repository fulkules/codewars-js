// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// solution("camelCasing")  ==  "camel Casing"

// fn(str) => str
// initialize a new empty string
// iterate string arg until char is uppercase
// build new string, inserting a space before the uppercase char
// return the new string

function solution(s){
    let newString = '';
    s.split('').map(char => {
       if (char === char.toUpperCase()){
          newString += ` ${char}`;
       } else {
           newString += char;
       }
    });
    return newString;
}

// best practice regex
// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
// }

// refactored solution
// const solution = string => {
//   return [...string].map((char) => {
//     return (char === char.toUpperCase()) ? ` ${char}` : char;
//   }).join('');
// }

module.exports = solution;