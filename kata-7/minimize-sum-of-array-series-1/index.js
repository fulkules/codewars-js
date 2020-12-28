// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
//
//     Notes
// Array/list will contain positives only .
//     Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)
// Explanation:
//     The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
//     The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
//     The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74

// fn(arr) => num
// sort numArr
// iterate arr
// multiply largest and smallest nums (start & end of array)
// continue multiplying tuples until none left
// iterate the product arr and reduce to sum
// return sum

function minSum(arr){
    let numArr = arr.sort((a, b) => a - b); // [3,6,10,12,24,26]
    let prodArr = [];
    for(let i = 0; i < ((numArr.length - 1) / 2); i++){ // i = 0, i = 1, i = 2, i = 3
        prodArr.push(numArr[i] * numArr[numArr.length - i - 1]); // [(26 * 3), (24 * 6), (10 * 12)]
    }
    return prodArr.reduce((acc, cur) => acc + cur);
}

// function minSum(arr) {
//   arr.sort((x, y) => x - y);
//   let s = 0
//   while(arr.length) s += arr.pop() * arr.shift();
//   return s;
// }

module.exports = minSum;