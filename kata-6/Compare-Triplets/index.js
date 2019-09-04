// Alice and Bob each have 3 numbers.  Compare each number at the given index position.  Return an array that counts how many times Alice or Bob's number at a given index is greater than the other.

//5 6 7
//3 6 10
// => [1, 1]

let a = [5, 6, 7]
let b = [3, 6, 10]


function compare(a, b) {
  let alice = 0, bob = 0
  a.forEach((item, i) => {
    (a[i]>b[i]) && alice++
    (a[i]<b[i]) && bob++
  })
  return [alice, bob]
}

compare(a,b)

module.exports = compare;