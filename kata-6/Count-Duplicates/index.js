// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed
// to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const dupCount = text => {
  // initialize an empty arr to push matched chars
  let matched = [];
  // convert text to lowercase and split into arr of chars
  let strArr = text.toLowerCase().split("");
  // loop through new str array
  for (let i = 0; i < strArr.length; i++) {
    // make a new copy of arr from 0 to i on each iteration
    let copy = strArr.slice(0, i);
    // see if match arr contains the value at curr index
    matched.includes(strArr[i])
      ? // if so, go to the next char in loop
        i++
      : // if not see if the copy at this iteration includes the char
        copy.includes(strArr[i]) &&
        // if it does, push this char into the matched char arr
        matched.push(strArr[i]);
  }
  // return the length of matched array
  return matched.length;
};

// Optimized solution

// function dupCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

dupCount("indivisibilities");

module.exports = dupCount;
