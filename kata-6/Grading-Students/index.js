// fn [73, 67, 38, 33] => [75, 67, 40, 33]

// Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75 - 73 < 3, the student's grade is rounded to 75.
// Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70 - 67 = 3, the grade will not be modified and the student's final grade is 67.
// Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40 - 38 < 3, the student's grade will be rounded to 40.
// Student 4 received a grade below 38, so the grade will not be modified and the student's final grade is 33.

const grades = [73, 67, 38, 33]

function gradingStudents(grades) {
  // set empty arr to push new values
  let graded = [];
  let mult;
  // iterate through array of grades
  for (let i = 0; i < grades.length; i++){
    // early return grade if grade is less than 38
    if(grades[i] < 38){
      graded.push(grades[i])
    } else {
      // get the nearest multiple of 5 from each grade
      mult = Math.ceil(grades[i]/5)*5;
      // take the mult of 5 and subtract the orig grade
      // if this val is less than 3 round the grade up to   the multiple of 5
      if((mult - grades[i]) < 3){
        graded.push(mult)
      } else {
      // else push the the grade
        graded.push(grades[i])
      }
    }
  }
  return graded;
}

gradingStudents(grades)

module.exports = gradingStudents;