// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
//     It should remove all values from list a, which are present in list b.
//
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
//     arrayDiff([1,2,2,2,3],[2]) == [1,3]

// fn(arr, arr) => arr
//

function arrayDiff(a, b){
    if(!b.length || !a.length) return a;
    let arr = [];
    a.filter(x => !b.includes(x) && arr.push(x));
    return arr;
}

// simplified refactor
// function arrayDiff(a, b) {
//   return a.filter(e => !b.includes(e));
// }

module.exports = arrayDiff;