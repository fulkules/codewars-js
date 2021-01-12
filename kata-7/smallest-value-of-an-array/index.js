// Write a function that can return the smallest value of an array or the index of that value.
// The function's 2nd parameter will tell whether it should return the value or the index.
//
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates.
// Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
//
// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// fn(arr, str) => num
// iterate array
    // store the smallest value
    // compare to next value
    // if str is 'value' return the value
    // else return the index

// function min(arr, toReturn){
//     let val = arr[0], idx = 0;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < val){
//             val = arr[i];
//             idx = i;
//         }
//     }
//     return toReturn === 'value' ? val : idx;
// }

// best practice using Math.min
function min(arr, toReturn) {
  let val = Math.min(...arr);
  return toReturn === 'value' ? val : arr.indexOf(val);
}

// using es6 reduce
// function min(arr, toReturn) {
//   return arr.reduce(function(o, v, i){
//     return (v < o.value) ? (o.value = v, o.index = i, o) : o;
//   }, {value: Infinity, index: 0})[toReturn];
// }

module.exports = min;