// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// fn(str || arr) => arr
// iterate over str or arr
// if char[i] and char[i+1] are not equal, push it into newArr
// return newArr

const uniqueInOrder = iterable => {
  let newArr = [];
  let last;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      newArr.push((last = iterable[i]));
    }
  }
  return newArr;
};

// refactor
// const uniqueInOrder= (iterable) =>{
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

module.exports = uniqueInOrder;
