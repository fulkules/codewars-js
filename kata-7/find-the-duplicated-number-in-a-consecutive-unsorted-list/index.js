// You are given an array of n+1 integers 1 through n.
// In addition there is a single duplicate integer.
//
//     The array is unsorted.
//
//     An example valid array would be [3, 2, 5, 1, 3, 4].
//     It has the integers 1 through 5 and 3 is duplicated.
//     [1, 2, 4, 5, 5] would not be valid as it is missing 3.
//
// You should return the duplicate value as a single integer.

// fn(arr) => num
// sort the array
// iterate array
    // if i === i+1
        // return the number

function findDup(arr){
    let dup = 0;
    arr.sort().filter((_, i) => arr[i] === arr[i+1] ? dup = arr[i] : null);
    return dup;
}

// using Array.prototype.reduce()
// function findDup(arr){
//   return arr.reduce(function(n, v, i){
//     return arr.indexOf(v) == i ? n : v;
//   }, null);
// }

// using Array.prototype.find() ---- ecma262 (Nov 2020 spec) https://tc39.es/ecma262/#sec-array.prototype.find
// mdn examples: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// function findDup( a ){
//   return a.find(x=>a.indexOf(x)!=a.lastIndexOf(x));
// }

module.exports = findDup;