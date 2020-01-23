// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    const lengths = s.split(' ').map(word => word.length);
    const minLength = Math.min(...lengths);
    return minLength;
}

// refactor
// function findShort(s){
    // return Math.min(...s.split(' ').map(word => word.length))
// }

module.exports = findShort;