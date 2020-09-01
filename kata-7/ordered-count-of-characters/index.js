// Count the number of occurrences of each character and return it as
//     a list of tuples in order of appearance. For empty output return an empty list.
//
//
//     Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// fn(str) => array
// initialize empty array var
// iterate string
// get unique chars and quantity
    // iterate the new created array
        // if char is not found, add a new array tuple with the char and a count at 1
        // if char is found, increment the count in the tuple
// return the new array

const orderedCount = text => { // O(n)
    const result = [];
    const letters = {};

    for (let i = 0; i < text.length; i++) {
        if (letters[text[i]] === undefined) {
            letters[text[i]] = i;
            result.push([text[i], 1]);
        } else {
            result[letters[text[i]]][1]++;
        }
    }
    return result;
};

// best practice
// const orderedCount = s =>
//   Array.from(s.split('')
//   .reduce((m, k) =>
//      m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

// using Set
// const orderedCount = str => [...new Set([...str])].map(char => [char, str.split(char).length - 1])

// using filter
// const orderedCount = function (text) {
//   letters = text.split("")
//   let uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index)
//
//   return uniqs.map((letter) => [letter, text.split(letter).length - 1])
// }

module.exports = orderedCount;