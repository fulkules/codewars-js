/*
Implement a function, multiples(m, n), which returns
an array of the first m multiples of the real number n.
Assume that m is a positive integer.

Ex.

multiples(3, 5.0)
should return

[5.0, 10.0, 15.0]
*/

// initialize empty arr
// iterate up to m, start at 1
    // push i * n into the arr in each loop
// return arr

function multiples(m, n){
    let arr = [];
    for(let i = 1; i <= m; i++){
        arr.push(i * n);
    }
    return arr;
}

/*
alternate solutions
function multiples(m, n){
  return Array.from(Array(m), (_v, i) => (i + 1) * n);
}

function multiples(m, n){
  let result = [];
  while (m > 0) {
    result.unshift(m*n)
    m--;
  }
  return result;
}

const multiples = (m, n) => Array(m).fill(n).map((x, i) => x * (i + 1));

const multiples = (m, n) => [...Array(m)].map((_, idx) => ++idx * n);
*/

module.exports = multiples;