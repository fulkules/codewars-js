// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
//
//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
//     Example:
//     a = ["az", "toto", "picaro", "zone", "kiwi"] -->
//
//         [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

// fn(arr) => arr
// iterate the array
// build new arrays of possible list combinations
    // [1 item, 4 items], [2 items, 3 items], [3, 2], [4,1]
    // grab one & join remaining, grab 2 & join remaining...grab len-1 & remaining

function partlist(arr){
    let newArr = [];
    for(let i = 1; i < arr.length; i++){
        newArr.push([
            arr.slice(0, i).join(' '),
            arr.slice(i).join(' ')
        ]);
    }
    return newArr;
}

// refactor with array.prototype.map
// function partlist(arr){
//     return arr.map((_, i) => [
//         arr.slice(0, i).join(' '),
//         arr.slice(i).join(' ')
//     ]).slice(1);
// }

// using array.prototype.reduce
// const partlist = array =>
//   array.reduce((acc, cur, idx) => {
//     if (idx === 0) return acc
//     const subarray = [array.slice(0, idx).join(' '), array.slice(idx).join(' ')]
//     return acc.concat([subarray])
//   }, [])

module.exports = partlist;