// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

const towerBuilder = floors => {
    let space, star, tower = [];
    for(i = 1; i <= floors; i++){
      space = " ".repeat(floors - i);
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower;
}

// IE compatible refactor
// function towerBuilder(nFloors) {
//     let floors = [];
//     for (let i = 0, n = nFloors - 1; i < nFloors; ++i, --n) {
//         floors.push(Array(n + 1).join(" ") + Array(i * 2 + 2).join("*") + Array(n + 1).join(" "));
//     }
//     return floors;
//   }

module.exports = towerBuilder;