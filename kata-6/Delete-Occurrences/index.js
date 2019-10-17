// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// Example
//   deleteNth ([1,1,1,1],2) // return [1,1]

//   deleteNth ([20,37,20,21],1) // return [20,37,21]

function deleteNth(arr, x) {
  // Create an empty object to store how many times each object exists
  var cache = {};
  // Call the filter function, the delegate is called once for each item
  // in the array and you return true or false depending on if it should
  // be kept or not
  return arr.filter(function(n) {
    // Use the item as key and store the number of times the item has appeared.
    // (cache[n]||0) fetches the current value of cache[n] or zero if it doesn't
    // exist. Then add one to it and store it.
    cache[n] = (cache[n] || 0) + 1;
    // If the number of times it has appeared in the array is less or equal to
    // the limit then return true so the filter function keeps it.
    return cache[n] <= x;
  });
}

module.exports = deleteNth;
