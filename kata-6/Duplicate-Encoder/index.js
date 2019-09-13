// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function dupEncoder(word) {
  // convert word to lowercase and split it
  // loop over word and compare chars in array
  // if the char is in arr more than once return "("
  // if the char is in arr only once return ")"
  // join the array and return the string
  return word
    .toLowerCase()
    .split("")
    .map((val, i, arr) => {
      return arr.indexOf(val) === arr.lastIndexOf(val) ? "(" : ")";
    })
    .join("");
}

module.exports = dupEncoder;
