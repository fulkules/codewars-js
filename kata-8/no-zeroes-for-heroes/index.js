// Numbers ending with zeros are boring.
//
//     They might be fun in your world, but not here.
//
//     Get rid of them. Only the ending ones.
//
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// fn(num) => num
// convert num to string, then string to array
// itereate string starting at end
    // if the first item is 0, take it out
    // begin loop again

function noBoringZeros(n){
    return Number(`${n}`.replace(/0+$/, ''));
}

// alterenate solutions
// function noBoringZeros(n) {
//   while (n % 10 === 0 && n !== 0) {
//     n = n / 10
//   }
//   return n
// }

// function noBoringZeros(x) {
//   let a = `${x}`.split('');
//   for(let i = a.length -1; i >= 0; i--){
//     if (a[i] == 0){
//         a.pop()
//     }else{
//         break
//     }
//   }
// return Number(a.join(''))
// }

module.exports = noBoringZeros;