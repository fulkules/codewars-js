// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
//     Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let words = str.split(' ');
    let wordArr = [];
    for(let i=0; i<words.length; i++){
        wordArr.push(words[i].split('').reverse().join(''));
    }
    return wordArr.join(' ');
}

// concise refactor
// const reverseWords = str => str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');

// regex solution
// const reverseWords = s => s.replace(/\S+/g, v => [...v].reverse().join``);

module.exports = reverseWords;