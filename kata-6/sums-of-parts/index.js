// Let us consider this example (array written in general format):
//
// ls = [0, 1, 3, 6, 10]
//
// Its following parts:
//
// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
//
// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
//
// Other Examples:
// ls = [1, 2, 3, 4, 5, 6]
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]
//
// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Take a look at performance: some lists have thousands of elements.

// fn(arr) => arr
// iterate the ls
// put the sum of all digits into a different array
// take out the first item in the array
// repeat the iteration until you have an empty array
// put 0 at the end of the array
// return the newly built array
    // ***** that works, but performance is not good for large arrays
    // because it it computes the sum over and over -- rethink for performance

// function partsSums(ls){
//     let arr = [];
//     while(ls.length){
//         arr.push(ls.reduce((acc, cur) => acc + cur));
//         ls = ls.splice(1);
//     }
//     arr.push(0);
//     return arr;
// }

// fn(arr) => arr
// get the full sum of the list and put into an array
// iterate the list (skip the first item)
// subtract the item before current and put this sum into array
// return the array

function partsSums(ls){
    let sum = ls.reduce((acc, cur) => acc + cur, 0),
        sumsArr = [sum];
    for(let i = 1; i <= ls.length; i++){
        sum -= ls[i - 1];
        sumsArr.push(sum);
    }
    return sumsArr;
}

// voted best practice
// function partsSums(ls) {
//     ls.unshift(0);
//     let sum = ls.reduce((p, c) => p + c, 0);
//     return ls.map(v => sum = sum - v);
// }

module.exports = partsSums;