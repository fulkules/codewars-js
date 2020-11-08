// Take an array and remove every second element from the array.
//     Always keep the first element and start removing with the next element.
//
//     Example:
//
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!

// fn(arr) => arr

function removeEveryOther(arr){
    return arr.filter((item, i) => !(i % 2) && item);
}

module.exports = removeEveryOther;