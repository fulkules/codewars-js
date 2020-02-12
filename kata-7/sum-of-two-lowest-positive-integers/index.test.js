const sumTwoSmallestNumbers = require('./index');

describe(sumTwoSmallestNumbers, () => {
    it ('should return a list with strings removed', () => {
        expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toStrictEqual(13);
        expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toStrictEqual(6);
        expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toStrictEqual(24);
    })
})