// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
//     Example:
//
// Input:
//
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
//     'alpha beta gamma delta'

// fn(str) => str
// google 'remove duplicate in a string'
// convert the str to an array
// iterate the array
// if the first word is repeated anywhere, delete duplicate
// join the array back into str and return it

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');

// using array.prototype.filter
// function removeDuplicateWords (s) {
//   return s.split(' ').filter((n, i, s) => {
//     return s.indexOf(n) === i;
//   }).join(' ');
// }

// using Set() constructor, and Array.from static method
// const removeDuplicateWords = s => {
//   const set = new Set(s.split(' '));
//   return Array.from(set).join(' ');
// }

module.exports = removeDuplicateWords;