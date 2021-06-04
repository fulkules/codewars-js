// If you have completed the Tribonacci sequence kata, you would know by now that mister
// Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.
//
// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature
// of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci
// (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful)
// with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.
//
// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements -
// and remember each next element is the sum of the last X elements - and returns the first n elements
// of the so seeded sequence.
//
// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence

// fn(arr, num) => arr
// initialize a new array copied from the signature
// iterate up to n
    // add up the previous (sig.length) chars and put into new array
        // make a copy of prev (sig.length) chars and get the sum
        // put this sum into new array
// return the new array

function Xbonacci(signature, n){
    if(!n) return [];
    let res = signature.slice(0, n);
    for(let i = 0; i < (n - signature.length); i++){
        let next = res.slice(-(signature.length)).reduce((acc, cur) => acc + cur);
        res.push(next);
    }
    return res;
}

// refactor - best practice
// const Xbonacci = (sig, n) => {
//   let len = sig.length;
//   for (let i = len; i < n; i++)
//     sig[i] = sig.slice(i - len).reduce((a, b) => a + b);
//   return sig.slice(0, n);
// }

module.exports = Xbonacci;