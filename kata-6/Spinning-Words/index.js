// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata). Strings
// passed in will consist of only letters and spaces. Spaces will be included only when more
// than one word is present.


// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


// function spinWords(str){
//     // split into array of words
//     // split each word into an array of letters & get length
//     // if length >= 5, reverse the letters and join it back into array
//     // if length < 5, return normal word
//     let newArr = [];
//     let wordArr = str.split(' ');
//     // console.log(wordArr)
//     for(let i = 0; i < wordArr.length; i++){
//       if(wordArr[i].length >= 5){
//         newArr.push(wordArr[i].split('').reverse().join(''));
//       } else {
//         newArr.push(wordArr[i])
//       }
//     }
//     return newArr.join(' ')
//   }
  
  
  // BEST
  function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  };
  
  spinWords("Hey fellow warriors");

  module.exports = spinWords;