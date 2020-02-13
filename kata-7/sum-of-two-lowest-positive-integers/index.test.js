const sumTwoSmallestNumbers = require('./index');

describe(sumTwoSmallestNumbers, () => {
    it ('should return the sum of the two smallest integers in a given array', () => {
        expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toStrictEqual(13);
        expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toStrictEqual(6);
        expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toStrictEqual(24);
    })
})` `