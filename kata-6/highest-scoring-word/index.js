// Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the original string.
//
//     All letters will be lowercase and all inputs will be valid.

// fn(str) => str
// iterate string, split each word
// iterate each word and count the value of all chars
    // if total is greater than the curr biggest value word
        // overwrite the biggest
// return biggest

function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let wordArr = x.split(' ');
    let biggest = { word: wordArr[0], total: wordArr[0].split('').reduce((acc, cur) => acc + alphabet.indexOf(cur) + 1, 0) };
    x
        .split(' ')
        .map(word => {
            let next = { word: word, total: word.split('').reduce((acc, cur) => acc + alphabet.indexOf(cur) + 1, 0) };
            if(next.total > biggest.total){
                biggest.total = next.total;
                biggest.word = next.word;
            }
        });
    return biggest.word;
}

// best practice
// function high(x){
//   //transform the input string into array & define a string of alphabetical latin characters
//   var arr = x.split(' ');
//   var str = 'abcdefghijklmnopqrstuvwxyz';
//   //Iterate through the array with input words to find the one with the greatest sum
//   var newArr = arr.map(function(word){
//     var sum = 0;
//     for (var i = 0; i < word.length; i++) {
//       sum += str.indexOf(word[i]);
//     }
//     return sum;
//   });
//   //Return the word with the greatest sum
//   return arr[newArr.indexOf(Math.max(...newArr))];
// }

// alternate solution
// function high(s){
//   let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }

module.exports = high;