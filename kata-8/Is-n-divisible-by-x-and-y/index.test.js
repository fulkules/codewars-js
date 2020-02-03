const isDivisible = require('./index');

describe(isDivisible, () => {
    it ('should return boolean whether or not n is divisible by x AND y', () => {
        expect(isDivisible(3,3,4)).toStrictEqual(false);
        expect(isDivisible(12,3,4)).toStrictEqual(true);
        expect(isDivisible(8,3,4)).toStrictEqual(false);
    })
})