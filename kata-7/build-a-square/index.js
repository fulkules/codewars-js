// I will give you an integer. Give me back a shape that is as long and wide as the integer.
// The integer will be a whole number between 1 and 50.
//
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
//
// +++
// +++
// +++



function generateShape(int){
    let s = '';
    for(let i = 0; i < int; i++){
        if(i > 0)  s += '\n';
        s+='+'.repeat(int);
    }
    return s;
}

// best practice
// function generateShape(n){
//   return ("+".repeat(n)+"\n").repeat(n).trim()
// }

module.exports = generateShape;