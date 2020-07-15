// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//
// Note: anagrams are case insensitive
//
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//
//     Examples
// "foefet" is an anagram of "toffee"
//
// "Buckethead" is an anagram of "DeathCubeK"

// fn(str,str) => boolean
// split the strings
// sort
// join
// return whether or not the strings match

const isAnagram = (test, original) => {
    let sorted1 = test.toLowerCase().split('').sort().join();
    let sorted2 = original.toLowerCase().split('').sort().join();
    return sorted1 === sorted2;
};

module.exports = isAnagram;