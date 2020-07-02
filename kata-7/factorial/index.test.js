const sumDigits = require('./index');

describe(sumDigits, () => {
    it ('should return the factorial of a given num', () => {
        expect(sumDigits(0)).toStrictEqual(1);
        expect(sumDigits(1)).toStrictEqual(1);
        expect(sumDigits(5)).toStrictEqual(120);
        expect(sumDigits(10)).toStrictEqual(3628800);
        expect(sumDigits(-3)).toStrictEqual("The argument cannot be a negative number.");
    })
});