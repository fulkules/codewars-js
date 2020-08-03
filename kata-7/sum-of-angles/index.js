// Find the total sum of internal angles in an
// n-sided simple polygon. N will be greater than 2.

// e.g.- fn(3) => 180

// fn(num) => num
// use the formula (n-2) / 180 to find the sum of interior angles
// return sum

function angle(n){
    return (n - 2) * 180;
}

module.exports = angle;