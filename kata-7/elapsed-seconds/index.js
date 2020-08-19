// Complete the function so that it returns the number of seconds
// that have elapsed between the start and end times given.
//
//     Tips:
// The start/end times are given as Date (JS/CoffeeScript),
//     DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
//     The start time will always be before the end time.

// fn(js date obj, js date obj) => num
// subtract start from end
// that will give # of milliseconds
// divide by 1000
// return result

function elapsedSeconds(startDate, endDate){
    return (endDate - startDate) / 1000;
}

module.exports = elapsedSeconds;