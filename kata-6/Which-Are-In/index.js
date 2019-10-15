// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

// Beware: r must be without duplicates.
// Don't mutate the inputs.

// iterate the first array
// filter by the element being included in the 2nd array
// return sorted first array containing substrings of 2nd array

function inArray(a1, a2) {
    return a1.filter(word => {
        let found = false;
        a2.forEach(outer => {
          if(outer.indexOf(word) > -1) {
            found = true;
          }
        });
        return found;
      }).sort();
    }
    
    // refactor
    // const inArray = (a1, a2) => {
    //   let str = a2.join(' ');
      // return a1.filter(s => str.indexOf(s) !== -1).sort();
    // }
    
    
module.exports = inArray;