// Complete the solution so that it returns a formatted string.
// The return value should equal "Value is VALUE" where value
// is a 5 digit padded number.
//
//     Example:
//
// solution(5) // should return "Value is 00005"

// fn(num) => str
// get 5 - val as variable
// iterate up to this var
// append '0' to the beginning in each loop
// return the string

function solution(value){
    let string = value.toString(),
        len = 5 - string.length;
    for(let i = 0; i < len; i++){
        string = '0' + string;
    }
    return `Value is ${string}`;
}

// best practice
// function solution(value){
//   return "Value is " + ("00000" + value).slice(-5);
// }

// string.prototype.padStart  https://tc39.es/ecma262/#sec-string.prototype.padstart
// const solution = value => 'Value is ' + value.toString().padStart(5, '0');

// const str1 = '5';
//
// padStart() examples:
//
// console.log(str1.padStart(2, '0'));
// // expected output: "05"
//
// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
//
// console.log(maskedNumber);
// // expected output: "************5581"

module.exports = solution;