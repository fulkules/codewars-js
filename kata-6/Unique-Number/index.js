// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

const findUniq = arr => {
    let notUnique;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === arr[i+1] || arr[i] === arr[i+2]){
            notUnique = arr[i];
            break;
        }
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j] !== notUnique){
            return arr[j];
        }
    }
}

// refactor -- but not supported in Edge nor IE as of 10/9/19
// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

module.exports = findUniq;