// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z.
//     Let x be any string in the first array and y be any string in the second array.
//
//     Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//
//     #Example:
//
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
//     input : 2 strings with substrings separated by ,
//     output: number as a string

// fn(arr1, arr2) => int
// iterate first array
    // compare char length
    // iterate second array
        //  compare char length
// compare (arr1 long str - arr2 short) to (arr2 long str - arr1 short)
// return the longer of the two

function mxdiflg(a1, a2){
    if(!(a1.length) || !(a2.length)) return -1;
    let lengths = [];
    for (let i = 0; i < a1.length; i++){
        let x = a1[i];

        for(let j = 0; j < a2.length; j++){
            let y = a2[j];
            lengths.push(Math.abs(x.length - y.length));
        }
    }
    return Math.max(...lengths);
}

// refactor
// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) return -1
//   let l1 = a1.map(str => str.length)
//   let l2 = a2.map(str => str.length)
//   return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
// }

// pure functions example
// function compare(a, b) {
//     return a.length - b.length;
// }
//
// function length(x) {
//     return x.length;
// }
//
// function mxdiflg(a1, a2) {
//     if (a1.length == 0 || a2.length == 0) return -1;
//
//     var aa = a1.sort(compare).map(length), aa = [aa[0], aa[aa.length - 1]];
//     var bb = a2.sort(compare).map(length), bb = [bb[0], bb[bb.length - 1]];
//
//     return Math.max(Math.abs(aa[0] - bb[1]), Math.abs(aa[1] - bb[0]));
// }

module.exports = mxdiflg;