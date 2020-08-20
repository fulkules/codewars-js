// Complete the function circleArea so that it will return the area of a circle
// with the given radius. Round the returned number to two decimal places
// (except for Haskell). If the radius is not positive or not a number, return false.
//
//     Example:
//
// circleArea(-1485.86);    //returns false
// circleArea(0);           //returns false
// circleArea(43.2673);     //returns 5881.25
// circleArea(68);          //returns 14526.72
// circleArea("number");    //returns false

// fn(num) => num || boolean
// early return if NaN or lest than 1
// return math formula for finding circle area, rounded to 2 decimals

const circleArea = radius => {
    if(radius < 1 || typeof radius !== 'number') return false;
    return +(Math.PI * radius ** 2).toFixed(2);
};

// single line
// const circleArea = radius => radius > 0 ? +(radius**2*Math.PI).toFixed(2) : false;

module.exports = circleArea;