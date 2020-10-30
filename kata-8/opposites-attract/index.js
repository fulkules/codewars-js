// Timmy & Sarah think they are in love, but around where they live,
// they will only know once they pick a flower each. If one of the
// flowers has an even number of petals and the other has an odd
// number of petals it means they are in love.
//
//     Write a function that will take the number of petals of each
//     flower and return true if they are in love and false if they aren't.

// fn(num, num) => bool

// unnecessarily complicated solution
function lovefunc(flower1, flower2){
    let odd = [...arguments].filter(arg => arg % 2 !== 0);
    let even = [...arguments].filter(arg => arg % 2 === 0);
    if(odd.length && even.length) return true;
    return false;
}

// best practice
// const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

// another alternate solution
// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 === 1
// }

// const lovefunc = (x, y) => !!((x^y) % 2);

// fun solution
// const
//        lovefunc
//       =( Ͼ , Ͽ )=>
//           ! !
// ( ( Ͼ & 1) ^ (1 & Ͽ ) )

module.exports = lovefunc;