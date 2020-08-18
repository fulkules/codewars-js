// In this Kata, you will be given a string that may have mixed uppercase and lowercase
// letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase
// letters, convert the string to lowercase.
//     For example:
//
//     solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// fn(str) => str
// find num of lowercase chars
// find num of uppercase chars
// whichever has more convert remaining
// return str

function solve(s){
    let lower = 0, upper = 0;
    for(let i = 0; i < s.length; i++){
       let str = s[i]; // if you use s.toLowerCase() below it mutates s and never reaches second condition, so we need to make a copy
       if(s[i] === str.toLowerCase()) lower++;
       if(s[i] === str.toUpperCase()) upper++;
    }
    return lower >= upper
        ? s.toLowerCase()
        : s.toUpperCase();
}

// short solution
// const solve = s =>
//   (s.match(/[A-Z]/g) || []).length > (s.match(/[a-z]/g) || []).length
//     ? s.toUpperCase()
//     : s.toLowerCase();

module.exports = solve;