const gradingStudents = require('./index');

test('Test 1', () => {
    expect(gradingStudents([73, 67, 38, 33])).toStrictEqual([75, 67, 40, 33]);
})
  
test('Test 2', () => {
    expect(gradingStudents([84, 76, 55, 69])).toStrictEqual([85, 76, 55, 70]);
})

test('Test 3', () => {
    expect(gradingStudents([77, 68, 72, 74])).toStrictEqual([77, 70, 72, 75]);
})
  