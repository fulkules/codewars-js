// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// Don't modify the input
// For C: The result is freed.

//Generate weighted array
//create two-element array w/ nums and weighted values
//sort combined array by weighted values, considering equally weighted cases.
//re-map combined array to final, sorted array of weight numbers.

function orderWeight(str) {
    let weighted = str.split(" ")
    .map((sNum) => {
      let sum = 0;
    
      for (let i = 0; i < sNum.length; i++) {
        sum += parseInt(sNum[i]);
      }
      
      return sum;
    });
    let combined = str.split(" ")
    .map((weight, i) => [weight,weighted[i]]);
    return combined
    .sort((item1, item2) => {
      if (item1[1] === item2[1])
        return item1[0] > item2[0] ? 1 : -1;
      else
        return item1[1] - item2[1];  
    })
    .map((item) => item[0])
    .join(" ");
}

// refactor
// function orderWeight(str) {
//     const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);
//     return str.split(' ').sort((a, b) => {
//         const diff = sum(a) - sum(b);
//         return diff == 0 ? (a > b ? 1 : -1) : diff;
//     }).join(' ');
// }

module.exports = orderWeight;