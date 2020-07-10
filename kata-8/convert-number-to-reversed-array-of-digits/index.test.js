const digitize = require('./index');

describe(digitize, () => {
    test('should return an array of digits in reverse order they were passed in as a string', () => {
        expect(digitize(348597)).toEqual([7,9,5,8,4,3]);
        expect(digitize(35231)).toEqual([1,3,2,5,3]);
    });
});