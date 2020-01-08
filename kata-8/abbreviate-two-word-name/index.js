// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// [Patrick, Freeny]
// [P, F]
// P.F

function abbrevName(name) {
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// refactor chaining HOFs
// function abbrevName(name) { 
//     return name.split(' ').map(name => name[0].toUpperCase()).join('.');
// }

module.exports = abbrevName;