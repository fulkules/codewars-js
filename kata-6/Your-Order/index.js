// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

const order = words => {
  //define an empty result arr
  //define an array with strings 1-9
  //turn string into an array of words
  //iterate through the number arr
  //iterate through the string arr
  //if word includes num
  //push word to result arr
  //return result arr joined back into string

  let res = [];
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let wordArr = words.split(" ");
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < wordArr.length; j++) {
      if (wordArr[j].includes(nums[i])) {
        res.push(wordArr[j]);
      }
    }
  }
  return res.join(" ");
};

// refactor
// const order = words => {
//   return words
//     .split(" ")
//     .sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/))
//     .join(" ");
// };

module.exports = order;
