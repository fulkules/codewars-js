// We want to know the index of the vowels in a given word,
// for example, there are two vowels in the word super
// (the second and fourth letters).
//
// So given a string "super", we should return a list of [2, 4].
//
//     Some examples:
//     Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES:
//
//     Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// fn(str) => array
// initialize array var
// initialize vowel str
// iterate word arg
// if char is vowel push idx + 1 into an array
// return array

function vowelIndices(word){
    let indices = [];
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    word.toLowerCase()
            .split('')
            .map((char, i) => vowels.includes(char) && indices.push(i+1));
    return indices;
}

// IE compatible and Best Practice
// function vowelIndices(word) {
//   let arr = [];
//   for(let i = 0; i < word.length; i++) {
//     if(/[aeioyu]/i.test(word[i])) {
//       arr.push(i+1);
//     }
//   }
//   return arr;
// }

module.exports = vowelIndices;