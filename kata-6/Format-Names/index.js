// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// fn(array) => string

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.



const formatNames = (names) => {
    // declare an empty array variable
    let strArr = [];
    // iterate the array of objects
    names.forEach( obj => {
        // add the property of each obj to the array variable & convert to strings
        strArr.push(Object.values(obj).join())
        /* REMINDER -- Object.values is not supported in stupid IE */
    })
    // return the joined array with commas, and replace the last comma with ampersand
    return strArr.join(', ').replace(/,(?=[^,]*$)/, ' &');
}

// refactor (also IE compatible)

// function formatNames(names){
//   return names
//     .map((item) => item.name)
//     .join(', ')
//     .replace(/,\s([^,]+)$/, ' & $1');
// }

module.exports = formatNames;