// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
//
//     the string should start with a 1.
//
// a string with size 6 should return :'101010'.
//
//     with size 4 should return : '1010'.
//
//     with size 12 should return : '101010101010'.
//
//     The size will always be positive and will only use whole numbers.

// fn(num) => string

function stringy(size){
    let str = '1';
    for(let i = 2; i <= size; i++){
        i % 2 ? str += '1' : str += '0';
    }
    return str;
}

// best practice
// function stringy(size) {
//   let str = '';
//   for(let i = 1; i <= size; i++){
//     str += i % 2;
//   }
//   return str;
// }

// string.prototype.repeat()
// const stringy = size => "10".repeat(size).slice(0,size);

// interesting solution
// function stringy(size) {
//   return ('1'.repeat(size)).replace(/11/g, '10');
// }

module.exports = stringy;