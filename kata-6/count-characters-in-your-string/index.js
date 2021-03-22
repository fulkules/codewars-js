// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.



function count(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        if(!obj.hasOwnProperty(str.charAt(i))){
            obj[str.charAt(i)] = 1;
        } else {
            obj[str.charAt(i)] += 1;
        }
    }
    return obj;
}

// best practice
// function count (string) {
//   var count = {};
//   string.split('').forEach(function(s) {
//      count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }

// alternate solution with Array.reduce
// function count (string) {
//   return string.split('').reduce(function(counts,char){
//     counts[char] = (counts[char]||0) + 1;
//     return counts;
//   },{});
// }

module.exports = count;