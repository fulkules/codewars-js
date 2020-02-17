// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// a + b > c    OR    b + c > a    OR    c + a > b

function isTriangle(a,b,c) {
    if(a <= 0 || b <= 0 || c <= 0) return false;

    let arr = [a,b,c];
    let largest = arr.sort((a,b)=>a-b).pop();
    let x = arr[0];
    let y = arr[1];

    if(x+y > largest){
        return true;
    } else {
        return false;
    }
}

// best practice
// const isTriangle = (a,b,c) => a + b > c && a + c > b && c + b > a;

module.exports = isTriangle;