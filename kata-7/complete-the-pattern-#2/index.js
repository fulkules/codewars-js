// Task:
//     You have to write a function pattern which returns
// the following Pattern (See Pattern & Examples) upto n number of rows.
//
//     Note: Returning the pattern is not the same as Printing the pattern.
//     Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
//     There are no whitespaces in the pattern.
//     Pattern:
// (n)(n-1)(n-2)...4321
// (n)(n-1)(n-2)...432
// (n)(n-1)(n-2)...43
// (n)(n-1)(n-2)...4
// ...............
// ..............
// (n)(n-1)(n-2)
// (n)(n-1)
// (n)
// Examples:
//     pattern(4):
//
// 4321
// 432
// 43
// 4
// pattern(11):
//
// 1110987654321
// 111098765432
// 11109876543
// 1110987654
// 111098765
// 11109876
// 1110987
// 111098
// 11109
// 1110
// 11
// Hint: Use \n in string to jump to next line

// fn(num) => string
// initialize num str and output str
// while n > 0
    // add n to numb
    // build output str
    // decrement n
// return the output str

function pattern(n) {
    let number = "", output = "";
    while (n > 0) {
        number += n;
        output = number + (output ? "\n" : "") + output;
        n--;
    }
    return output;
}

// using Array.from
// const pattern = n =>
//     Array.from({ length: n }, (_, index) => {
//         let string = '';
//         for (let i = n; i > index; i--) string += i;
//         return string
//     }).join('\n');

// best practice
// function pattern(n) {
//   if (n < 1) return ''
//   var lines = []
//
//   for (var i = 0; i < n; i++) {
//     var line = ''
//
//     for (var j = n; j > i; j--) {
//       line += j
//     }
//
//     lines.push(line)
//   }
//
//   return lines.join('\n')
// }

module.exports = pattern;