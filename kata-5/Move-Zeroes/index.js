// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// fn(arr) => arr
// filter a new array with all the zeroes
// filter a new array with all the other chars
// merge these two arrays with the zeroes last

function moveZeroes(arr){
    let zeroes = arr.filter(item => item === 0);
    let noZeroes = arr.filter(item => item !== 0);

    return [...noZeroes, ...zeroes];
}

// IE compatible refactor
// function moveZeroes(arr) {
//   return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
// }

module.exports = moveZeroes;