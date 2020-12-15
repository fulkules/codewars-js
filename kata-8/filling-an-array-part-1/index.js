// We want an array, but not just any old array, an array with contents!
//
//     Write a function that produces an array with the numbers 0 to N-1 in it.
//
//     For example, the following code will result in an array containing the numbers 0 to 4:
//
// arr(5) // => [0,1,2,3,4]



function arr(n){
    let newArr = [];
    if(n){
        for(let i = 0; i < n; i++){
            newArr.push(i);
        }
    }
    return newArr;
}

// using Array.from
// const arr = n => Array.from({length: n}, (_, i) => i);

// using Array().keys()
// arr = n => n ? [...Array(n).keys()] : [];

module.exports = arr;