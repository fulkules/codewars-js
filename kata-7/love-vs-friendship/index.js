// If　a = 1, b = 2, c = 3 ... z = 26
//
// Then l + o + v + e = 54
//
// and f + r + i + e + n + d + s + h + i + p = 108
//
// So friendship is twice stronger than love :-)
//
// The input will always be in lowercase and never be empty.

// fn(str) => num
// initialize alphabet string
// split the str arg into array
// iterate the array
// accumulate a total using indexOd + 1
// return accumulation

function wordsToMarks(str){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return str.split('')
                .map(char => alphabet.indexOf(char) + 1)
                .reduce((acc, cur) => acc + cur, 0);
}

// best practice (arguable)
// const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

module.exports = wordsToMarks;