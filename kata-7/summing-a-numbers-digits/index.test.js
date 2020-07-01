const sumDigits = require('./index');

describe(sumDigits, () => {
    it ('should return the sum of the digits of a given num', () => {
        expect(sumDigits(10)).toStrictEqual(1);
        expect(sumDigits(99)).toStrictEqual(18);
        expect(sumDigits(-32)).toStrictEqual(5);
    })
});