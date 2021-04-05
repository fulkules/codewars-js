// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to
// calculate the total time required for all the customers to check out!
//
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer,
// and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.
//
// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)
//
// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times
//
// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.
//
// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till
// as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.
//
// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a
// thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

// fn(arr, num) => num
// need an array of timers the size of num
// iterate array
// find the lowest available in array of timers
    // add the customer's required time to this timer
// return the biggest timer value

// [2,3,10], 2
function queueTime(customers, n) {
    let w = new Array(n).fill(0); // [0,0]
    for (let t of customers) { // [2,3,10]
        let idx = w.indexOf(Math.min(...w)); // 0
        w[idx] += t; // 0 += 2 = 2
    }
    return Math.max(...w);
}

// IE compatible refactor solution
// function queueTime(customers, registers) {
//   let arr = [];
//
//   for(let i = 0; i < registers; i++)
//     arr[i] = 0;
//
//   for(let i = 0; i < customers.length; i++) {
//     arr[0] += customers[i];
//     arr.sort((a, b) => a - b);
//   }
//
//   return arr[arr.length - 1];
// }

// interesting solution using Recursion

// function queueTime(queue, n, tills = [], time = 0) {
//
//     if (!queue.length && !tills.length) return time   // ‣‣‣ If queue and tills is free => we finish => return time
//
//     if (tills.length < n && queue.length) {           // ‣‣‣ If there are empty tills and queue doesn't end
//         tills.push( queue.shift() )                     // one person remove from queue to till
//         return queueTime(queue, n, tills, time)         // repeat previous steps with new queue and tills
//     }
//     // ‣‣‣ If tills aren't empty
//     let first = Math.min(...tills)                  // find the first person who will finish
//     time += first                                   // first person has finished
//     tills = tills.map(i => i - first)               // correct time for another persons in front of the tills
//     tills.sort((a, b) => a - b)                     // sort persons in front of the tills according to their time
//     tills.shift()                                   // first person leaves his till
//     return queueTime(queue, n, tills, time)         // repeat previous steps with new tills and time

module.exports = queueTime;