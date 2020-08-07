// Complete the method which accepts an array of integers, and returns one of the following:
//
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// fn(arr) => string
// make an ascending copy of the array arg
// make a descending copy of the array arg
// iterate the array arg
    // compare each num to the num at same idx of asc sorted arrays -- if all pass return asc str
    // compare each num to the num at same idx of desc sorted arrays -- if all pass return desc str
// if it doesn't meet either condition return 'no'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function isSortedAndHow(array) {
    let asc = [...array].sort((a,b) => a - b);
    let desc = [...array].sort((a,b) => b - a);

    if(array.every((n, i) => n === asc[i])) return 'yes, ascending';
    if(array.every((n, i) => n === desc[i])) return 'yes, descending';

    return 'no';
}

// using Array.prototype.filter
// const isSortedAndHow = array => {
//   let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
//   let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
//
//   return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
// }

module.exports = isSortedAndHow;