// Simple challenge - eliminate all bugs from the supplied code so that
// the code runs and outputs the expected value. Output should be the
// length of the longest word, as a number.
//
//     There will only be one 'longest' word.

// initialize a length var
// split string by spaces
// iterate the split str array
// if inner str length is greater than curr len var, overwrite it
// return length var

function findLongest(str){
    let arr = str.split(' ');
    let len = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > len){
            len = arr[i].length;
        }
    }
    return len;
}

// es6 short syntax refactor
// const findLongest = s => Math.max(...s.split(" ").map(x => x.length));

// es6 using Array.prototype.reduce()
// const findLongest = s => s.split(" ").reduce((l, e) => l = l < e.length ? e.length : l, 0);

module.exports = findLongest;