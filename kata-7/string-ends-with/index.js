// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
//     solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// solution('abc', '') // returns true  **edge case**

function solution(str, ending) {
    if(!ending.length) return true;
    return str.slice(-(ending.length)) === ending;
}

module.exports = solution;