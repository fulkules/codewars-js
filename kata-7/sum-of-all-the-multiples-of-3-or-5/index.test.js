const findSum = require('./index');

describe(findSum, () => {
    it ('should return the sum of all nums divisible by 3 or 5, up to given num arg', () => {
        expect(findSum(5)).toStrictEqual(8);
        expect(findSum(10)).toStrictEqual(33);
    })
});