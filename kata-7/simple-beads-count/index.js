// Two red beads are placed between every two blue beads. There are N blue beads.
//     After looking at the arrangement below work out the number of red beads.
//
//     @ @@ @ @@ @ @@ @ @@ @ @@ @
//
//     Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript,
//     TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
//     If there are less than 2 blue beads return 0.

// 2 => 2
// 3 => 4

// fn(num) => num
// early return 0 if n < 2
// initialize a reds variable to 0
// iterate up to n from 1
// in each loop increment reds by 2
// return reds

function countRedBeads(n){
    if(n < 2) return 0;
    let reds = 0;
    for(let i = 1; i < n; i++){
        reds += 2;
    }
    return reds;
}

// best practice
// function countRedBeads(n) {
//   return n < 2 ? 0 : 2 * n - 2;
// }

module.exports = countRedBeads;