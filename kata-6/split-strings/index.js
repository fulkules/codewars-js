// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number
// of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']



function solution(str){
    let odd = str.length % 2,
        tuples = [];
    if(odd) str += '_';
    for(let i = 0; i < str.length; i+=2){
        tuples.push(`${str.charAt(i)}${str.charAt(i+1)}`);
    }
    return tuples;
}

// alternate solution
// function solution(str){
//   arr = [];
//   for(var i = 0; i < str.length; i += 2){
//     second = str[i+1] || '_';
//     arr.push(str[i] + second);
//   }
//   return arr;
// }

// interesting solution
// function solution(s){
//    return (s+"_").match(/.{2}/g)||[]
// }

module.exports = solution;