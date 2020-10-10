// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
//     if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

// fn(num, num) => str
// perform calculation
// return result based on result

function bmi(weight, height){
    let calc = weight / (height * height), category = '';
    if(calc <= 18.5){
        category = 'Underweight';
    } else if(calc <= 25){
        category = 'Normal';
    } else if(calc <= 30){
        category = 'Overweight';
    } else if(calc > 30) {
        category = 'Obese';
    }
    return category;
}

// concise refactor
// function bmi(weight, height) {
//  const bmi  = weight/(height*height);
//  return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
// }



module.exports = bmi;