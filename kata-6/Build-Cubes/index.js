// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1
// mov rdi, 1071225
// call find_nb            ; rax <-- 45

// mov rdi, 91716553919377
// call find_nb            ; rax <-- -1


const findNb = (m) => {
    // initialize 'n' variable to zero
    let n = 0;
    // initialize a volume variable to zero
    let volume = 0;
    // while volume is less than m
    while(volume < m){
        // increment n
        n++;
        // volume will equal volume plus (n*n*n)
        volume += n*n*n; // refactor line to: volume += Math.pow(n, 3);
    }
    // if volume is not equal to m return -1
    // else return n
    return volume !== m ? -1 : n;
}

module.exports = findNb;