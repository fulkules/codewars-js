// Task
// Given an array of integers , Find the maximum product obtained from
// multiplying 2 adjacent numbers in the array.
//
//     Notes
// Array/list size is at least 2.
//
// Array/list numbers could be a mixture of positives, negatives also zeroes .
//
//     Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
//     The maximum product obtained from multiplying 2 * 3 = 6, and
//     they're adjacent numbers in the array.
//
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

// fn(arr) => num
// iterate array
// multiply curr by next item
// store the value
// repeat until end of arr
    // if the new mult val is greater than prev
        // replace the value
// return the value

function adjacentElementsProduct(arr){
    let product = arr[0] * arr[1];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] * arr[i+1] > product){
            product = arr[i] * arr[i+1]
        }
    }
    return product;
}

// best practice using Math.max()
// function adjacentElementsProduct(array) {
//   let newArr = []
//   for(i=0; i < array.length-1; i++){
//     newArr.push(array[i]*array[i+1])
//   }
//   return Math.max(...newArr)
// }
//
// best practice refactored es6 using Math.max()
// function adjacentElementsProduct(a) {
//   return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
// }

module.exports = adjacentElementsProduct;