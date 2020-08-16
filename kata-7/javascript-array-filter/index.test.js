const getEvenNumbers = require('./index');

describe(getEvenNumbers, () => {
    it('should return an array', () => {
        expect(getEvenNumbers([1,2,3,4,5,6])).toBeInstanceOf(Array);
    });
    it('should return a new array of only the even numbers', () => {
        expect(getEvenNumbers([1,2,3,4,5,6])).toStrictEqual([2,4,6]);
    });
});