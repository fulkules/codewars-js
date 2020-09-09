// Create a method that accepts an array of names, and
// returns an array of each name with its first letter capitalized.
//
//     example
//
// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

// fn(arr) => arr
// iterate array of names
// perform function on each word, capitalizing first letter

function capMe(names){
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

module.exports = capMe;