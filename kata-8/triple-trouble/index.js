// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
// Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
//
//     E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
//
// Note: You can expect all of the inputs to be the same length.

// fn(str, str, str) => str

function tripleTrouble(one, two, three){
    let string = '';
    for(let i = 0; i < one.length; i++){
        string += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return string;
}

// es6 single liner
// const tripleTrouble = (one, two, three) => one.split("").map((char, i) => char + two[i] + three[i]).join("");

// using str.replace
// const tripleTrouble = (one, two, three) =>
//   one.replace(/\w/g, (val, idx) => val + two[idx] + three[idx]);

module.exports = tripleTrouble;