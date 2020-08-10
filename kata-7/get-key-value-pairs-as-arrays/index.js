// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.
//
//     Example:
//
// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects).
// For extra style, can you get your method to check for objects that extend their prototype?

// fn(obj) => array
// iterate the data obj
// push each key into an array
// push each value into an array
// put these two arrays inside an array and return

function keysAndValues(data){
    let keys = [], vals = [];
    for(let key in data){
        keys.push(key);
        vals.push(data[key]);
    }
    return [keys, vals];
}

// extra style points
// function keysAndValues(data){
//     let keys = [], vals = [];
//     for(let key in data){
//         if(data.hasOwnProperty(key)){
    //         keys.push(key);
    //         vals.push(data[key]);
//         }
//     }
//     return [keys, vals];
// }

// concise refactor
// const keysAndValues = data => [Object.keys(data), Object.values(data)];

module.exports = keysAndValues;