// Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.
//
// Note: no empty arrays will be given.
//
// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3



// function highestRank(arr){
//     let obj = {};
//     for(let i = 0; i < arr.length; i++){
//         if(obj.hasOwnProperty(arr[i])){
//             obj[arr[i]] += 1;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//     let keys = Object.keys(obj);
//     let max = obj[keys[0]];
//     let res = +keys[0];
//     for(let i = 1; i < keys.length; i++){
//         let val = obj[keys[i]];
//         if(val >= max){
//             max = val;
//             if(keys[i] > res) res = +keys[i];
//         }
//     }
//     return res;
// }

// refactor
function highestRank(arr){
  let res, max = 0, obj = {};
  for(let x of arr){
    obj[x] = (obj[x] || 0) + 1;
    if(obj[x] > max){
      max = obj[x];
      res = x;
    }
  }
  return res;
}

// best practice
// function highestRank(arr){
//   return arr.sort((a,b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length)[0];
// }

module.exports = highestRank;