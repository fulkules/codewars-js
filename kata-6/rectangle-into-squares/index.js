// The drawing below gives an idea of how to cut a given "true" rectangle into squares
// ("true" rectangle meaning that the two dimensions are different).
//
// alternative text
//
// Can you translate this drawing into an algorithm?
//
// You will be given two dimensions
//
// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell,
// Pascal and Fortran return a string) with the size of each of the squares.
//
// Examples in general form:
// (depending on the language)
//
//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]
//
//   You can see examples for your language in **"SAMPLE TESTS".**
// Notes:
// lng == wdth as a starting case would be an entirely different problem and the drawing is planned
// to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees!
// http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem).
//
// When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious
// but not in the spirit of this kata so, in that case, return None/nil/null/Nothing or return {}
// with C++, Array() with Scala, [] with Raku.

// fn(num, num) => array
// early return null if l equals w
// initialize empty array
// while l and w are greater than 0
    // if l is greater than or equal to w
        // put w in the array
        // subtract w from l
    // if w is greater ethan l
        // put l in array
        // subtract l from w
// return array

function sqInRect(l, w){
    if(l === w) return null;
    let squares = [];
    while(l > 0 && w > 0){
        if(l >= w){
            squares.push(w);
            l -= w;
        } else {
            squares.push(l);
            w -= l;
        }
    }
    return squares;
}

// shorten refactor with ternaries
// function sqInRect(l, w){
//     if(l === w) return null;
//     let squares = [];
//     while(l > 0 && w > 0){
//         squares.push(l > w ? w : l);
//         l > w ? l-= w : w -= l;
//     }
//     return squares;
// }

// solution with recursion
// function sqInRect(a, b, initial = true){
//   if (a === b) { return initial ? null : [a] }
//   const min = Math.min(a, b)
//   const max = Math.max(a, b)
//
//   return [min, ...sqInRect(max - min, min, false)]
// }

module.exports = sqInRect;