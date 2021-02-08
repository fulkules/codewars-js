// Input: Array of elements
//
//     ["h","o","l","a"]
//
// Output: String with comma delimited elements of the array in th same order.
//
// "h,o,l,a"



function printArray(array){
    let s = `${array[0]}`;
    for(let i = 1; i < array.length; i++){
        s += `,${array[i]}`
    }
    return s;
}

// best practice
// const printArray = array => array.join();

// alternate solutions
// function printArray(array){
//   return array.toString();
// }

// function printArray(array){
//   return String(array);//show me the code!
// }

module.exports = printArray;