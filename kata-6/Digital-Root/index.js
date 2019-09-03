// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digitalRoot(n) {
    // turn n into a sting, split it, log the length
    let len = n.toString().split('').length;
    // console.log(len)
    // if length = 1 return n
    // convert strings back to nums
    // add them all together, run function again
    if(len <= 1){
      return n
    } else {
      let x = n.toString().split('').reduce((acc, cur) => +acc + +cur, 0);
      return digitalRoot(x)
    }
    // console.log(len)
    
  }
  
  // function digitalRoot(n) {
  //   return (n - 1) % 9 + 1;
  // }
  
  digitalRoot(132189)

  module.exports = digitalRoot;