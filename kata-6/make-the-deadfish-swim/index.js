// Write a simple parser that will parse and run Deadfish.
//
// Deadfish has 4 commands, each 1 character long:
//
// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.
//
// parse("iiisdoso") => [ 8, 64 ]

// fn(str) => array
// initialize a var to 0 and empty array
// iterate the string
// is the letter one of the operations?
    // perform operation
// return the array

function parse(data){
    let total = 0, arr = [];
    for(let i = 0; i < data.length; i++){
        switch(data[i]){
            case 'i':
                total += 1;
                break;
            case 'd':
                total -= 1;
                break;
            case 's':
                total = total ** 2;
                break;
            case 'o':
                arr.push(total);
                break;
            default:
                break;
        }
    }
    return arr;
}

// refactor - best practice
// function parse(data) {
//   let res = [];
//
//   data.split('').reduce((cur, s) => {
//     if (s === 'i') cur++;
//     if (s === 'd') cur--;
//     if (s === 's') cur = Math.pow(cur, 2);
//     if (s === 'o') res.push(cur);
//
//     return cur;
//   }, 0);
//
//   return res;
// }

// another possible solution using a hash map
// const map = {
//   'i' : function(x){return x + 1;},
//   'd' : function(x){return x - 1;},
//   's' : function(x){return x * x;}
// }
//
// function parse( data )
// {
//   let array = [], val = 0;
//   data.split('').forEach(function(x){
//     if(x === 'o'){
//       array.push(val);
//     } else {
//       val = map[x](val);
//     }
//   });
//   return array;
// }

module.exports = parse;