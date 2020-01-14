// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str){
    let vowels = 'aeiou';
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

// refactor with regex
// return (str.match(/[aeiou]/ig)||[]).length;

module.exports = getCount