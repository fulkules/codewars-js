// The word i18n is a common abbreviation of internationalization in the developer community,
// used instead of typing the whole word and trying to spell it correctly. Similarly,
// a11y is an abbreviation of accessibility.
//
// Write a function that takes a string and turns any and all "words" (see below) within
// that string of length 4 or greater into an abbreviation, following these rules:
//
// A "word" is a sequence of alphabetical characters. By this definition, any other character
// like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two
// words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of
// removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X
//
// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

// fn(str) => str
// get the indices of each non-char
// need to separate string into words
    // split string on any non alphabetical chars
// iterate the word array
    // abbreviate each word
// return the rejoined array

function modify(s){
    return `${s[0]}${s.length - 2}${s[s.length - 1]}`;
}

function abbreviate(string){
    let indices = [];
    for(let i = 0; i < string.length; i++){
        if(string[i].match(/[^A-Za-z]/)) indices.push(i);
    }
    let modArr = string.split(/[^A-Za-z]/).map(w => w.length >= 4 ? modify(w) : w);
    let modStr = '';
    for(let j = 0; j < modArr.length; j++){
        modStr += `${modArr[j]}`;
        if(indices.length >= 1){
            modStr += string[indices.shift()];
        }
    }
    return modStr;
}

// best practices
// let find = /[a-z]{4,}/gi;
// function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }
//
// function abbreviate(string) {
//   return string.replace(find, replace);
// }

// function abbreviate(string) {
//   return string.replace(/\w{4,}/g, function(word) {
//     return word[0] + (word.length - 2) + word.slice(-1);
//   });
// }

module.exports = abbreviate;