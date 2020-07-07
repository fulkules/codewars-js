// Instructions
// Write a function that takes a single string (word) as argument. The function must return
// an array containing the indexes of all capital letters in the string.
//
//     Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// fn(str) => array
// split the string into charArray
// initiate idxArr
// iterate charArray
// test if char is not a number and is uppercase
// push the index of uppercase chars into idxArr
// return idxArr

const capitals = word => {
    let charArr = word.split('');
    let idxArr = [];
    charArr.map( (char, i) =>  {
        if (isNaN(char) && char === char.toUpperCase()){
            idxArr.push(i);
        }
    });
    return idxArr;
};

// refactor -- word split not really necessary
// const capitals = word => {
//      let caps = [];
//      for (let i = 0; i < word.length; i++){
//          if(word[i].toUpperCase() === word[i]) caps.push(i);
//      }
//      return caps;
// }

// single line with reduce
// const capitals = word => word.split('').reduce( (memo, v, i) => { v === v.toUpperCase() ? memo.concat(i) : memo }, []);

// interesting solution with regex
// const capitals = function (word) {
//   let ret = [];
//   word.replace(/[A-Z]/g, function(_, i){ ret.push(i) });
//   return ret;
// };

module.exports = capitals;