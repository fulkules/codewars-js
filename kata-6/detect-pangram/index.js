// A pangram is a sentence that contains every single letter of the alphabet at least once. For example,
// the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters
// A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

// remove all non-letter chars
// split the string
//


function isPangram(str){
    const alphArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let s = str.replace(/[^a-z]/ig, '');
    let strArr = s.toLowerCase().split('');
    strArr.map(char => alphArr.includes(char) && alphArr.splice(alphArr.indexOf(char), 1));
    return !alphArr.length;
}

// best practice
// function isPangram(string){
//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every((x) => string.toLowerCase().includes(x));
// }

// string.prototype.match()
// function isPangram(string){
//   return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }

module.exports = isPangram;