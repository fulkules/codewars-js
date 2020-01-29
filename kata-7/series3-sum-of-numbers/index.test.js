const getSum = require('./index');

describe(getSum, () => {
    it ('should return the sum of all the numbers up to and including given numbers', () => {
        expect(getSum(1,0)).toStrictEqual(1);
        expect(getSum(1,2)).toStrictEqual(3);
        expect(getSum(1,1)).toStrictEqual(1);
        expect(getSum(-1,2)).toStrictEqual(2);
    })
})