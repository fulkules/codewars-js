// Write a function that flattens an Array of Array objects
// into a flat Array. Your function must only do one level of flattening.
//
// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// fn(arr) => arr


const flatten = array => {
    return [].concat(...array);
};

// Array.prototype.flat -- not fully supported, ECMA-262 or ECMAScript 2021 Draft
// https://tc39.es/ecma262/#sec-array.prototype.flat
// const flatten = arr => arr.flat();


// good ol' fashioned for loop solution
// const flatten = function (array){
//   let res = [];
//   for(let i=0; i<array.length; i++) {
//     let el = array[i];
//     if(el instanceof Array) {
//       for(let j=0; j<el.length; j++) {
//         res.push(el[j]);
//       }
//     } else {
//       res.push(el);
//     }
//   }
//   return res;
// };

module.exports = flatten;