// Challenge:
//
//     Given a two-dimensional array of integers, return the flattened
// version of the array with all the integers in the sorted (ascending) order.
//
//     Example:
//
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//
//     Addendum:
//
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically.
//     For more information, please consult:
//
//     http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

// fn(arr) => arr
// flatten the array first
// then sort the flattened array

function flattenAndSort(array){
    let flat = [].concat(...array);
    return flat.sort((a,b) => a - b);
}

// single line refactor
// const flattenAndSort = array => [].concat(...array).sort((a,b) => a-b);

// using array.prototype.reduce
// const flattenAndSort = (array) => {
//     return array.reduce((e, i) => e.concat(i), []).sort((a, b) => a - b)
// }



module.exports = flattenAndSort;