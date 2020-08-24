// Task:
//     You have to write a function pattern which returns the following
// Pattern(See Pattern & Examples) upto n number of rows.
//
//     Note:Returning the pattern is not the same as Printing the pattern.
//     Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
//     There are no whitespaces in the pattern.
//     Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
// Examples:
//     pattern(5):
//
// 1
// 22
// 333
// 4444
// 55555
// pattern(11):
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// Hint: Use \n in string to jump to next line

// fn(num) => str
// initialize str variable
// iterate up to 'n'
// concat i num of i chars
// after each loop concat'\n' (not on last)

function pattern(n){
    let output = ``;
    if(n < 1) return output;
    for(let i = 1; i <= n; i++){
        output += i.toString().repeat(i);
        if(i !== n){
            output += `\n`;
        }
    }
    return output;
}

// IE supported solution - best practice
// function pattern(n) {
//   let res = [];
//   for(let i = 1; i <= n; i++) {
//     res.push(Array(i + 1).join(i));
//   }
//   return res.join('\n');
// }

module.exports = pattern;