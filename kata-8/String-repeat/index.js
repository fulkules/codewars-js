// Write a function called repeatString which repeats the given String src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n,s){
    return s.repeat(n);
}

// IE compatible refactor 
// function repeatStr(n,s){
//     let str = '';
//     for(let i = 0; i < n; i++){
//         str += s;
//     }
//     return str;
// }

module.exports = repeatStr;