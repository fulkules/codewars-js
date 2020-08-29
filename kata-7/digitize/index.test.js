const digitize = require('./index');

describe(digitize, () => {
    it('should return an array', () => {
        expect(digitize(123)).toBeInstanceOf(Array);
    });
    it('should return an array of individual digits in order', () => {
        expect(digitize(123)).toStrictEqual([1,2,3]);
        expect(digitize(0)).toStrictEqual([0]);
    });
});