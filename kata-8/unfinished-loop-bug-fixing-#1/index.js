// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help
// Timmy find and fix the bug in his unfinished for loop!



function createArray(number){
    var newArray = [];

    for(var counter = 1; counter <= number; counter++){
        newArray.push(counter);
    }

    return newArray;
}

// another way to do it
// const createArray = n => Array(...Array(n)).map((v, i) => i + 1);

module.exports = createArray;