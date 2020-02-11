// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// regex refactor short solution
//   \w   -> matches any word char ([a-zA-Z0-9_])
//   .*   -> matches any char (except for line terminators)
//   *    -> Quantifier matches between zero and unlimited times, giving back as needed
//   \1   -> matches the same text as most recently captured
//    i   -> insensitive modifier (ignores case of [a-zA-Z])
const isIsogram = str => !/(\w).*\1/i.test(str);

// similar to a hash map
// function isIsogram(str) {
//     let map = {};
//     let result = true;

//     str.split('').forEach(function(char) {
//       if (map[char.toUpperCase()] === undefined) {
//         map[char.toUpperCase()] = 1;
//       } else {
//         result = false;
//       }
//     });

//     return result;
// }

// another option
// function isIsogram(str){
//     // ignore case
//     str = str.toLowerCase();
    
//     let stash = {}; // hold the existing letters
    
//     // walk the string letter by letter
//     for( var i = 0; i < str.length; i++){
      
//       // is the letter present in stash?
//       if( stash[str[i]] )
//         return false; // then its double => return with false
//       else 
//         stash[str[i]] = true;  // otherwise it has not been found
      
//     }
    
//     return true; // if we pass all letters, none was double
    
//   }

module.exports = isIsogram;