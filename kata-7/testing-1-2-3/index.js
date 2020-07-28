// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//
// Write a function which takes a list of strings and returns each line prepended by the correct number.
//
//     The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//
//     Examples:
//
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// fn(array) => array
// initialize new Array variable
// iterate the items in array starting at 1
// prepend each item with the index separated with colon and space
// return new Array

const number = array => array.map( (item, i) => `${i + 1}: ${item}` );

// long solution
// const number = (arr) => {
// let newArr = [];
//   if (arr.length === 0) {
//     return [];
//   } else {
//     for (let i = 0, i < arr.length; i++) {
//       newArr.push((i + 1) + ': ' + arr[i]);
//     }
//   }
//   return newArr;
// }

module.exports = number;