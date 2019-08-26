// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.

// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// fn(str1,str2) => boolean
// see if str1 has the chars to make str2
// compare char count for each char in str
// put each char & count in obj for str1, and str2
// compare the count of chars obj.str2 < obj.str1


function scramble(str1, str2) {
    let letters = {};
    for (let prop of str1) {
      if(letters[prop]) letters[prop]++;
      else letters[prop] = 1;
    }
    for (let prop of str2) {
      if(!letters[prop]) return false
      else letters[prop]--;
    }
    return true;
   }

  scramble('rkqodlw', 'world')

  module.exports = scramble;