// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
    let evens = [];
    let odds = [];
    let strArr = numbers.split(' ');
    for (let i = 0; i<strArr.length; i++){
      if(strArr[i] % 2 !== 0){
        odds.push(i + 1);
      }
      if(strArr[i] % 2 === 0){
        evens.push(i + 1);
      }
    }
    return evens.length === 1 ? parseInt(evens) : parseInt(odds);
  }

  // refactor
//   function iqTest(numbers){
//       numbers = numbers.split(" ");
//       let evens = numbers.filter(num => num % 2 === 0);
//       let odds = numbers.filter(num => num % 2 !== 0);
//       let diff = evens.length === 1 ? evens[0] : odds[0];

//       return numbers.indexOf(diff) + 1;
//   }

module.exports = iqTest;