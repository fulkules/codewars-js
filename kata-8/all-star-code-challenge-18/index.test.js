const strCount = require('./index');

describe(strCount, () => {
    it('should return a number', () => {
        expect(typeof strCount('Hello', 'o')).toBe('number');
    });
    it('should return the count of occurrences the 2nd arg is found in the 1st arg', () => {
        expect(strCount('Hello', 'o')).toStrictEqual(1);
        expect(strCount('Hello', 'l')).toStrictEqual(2);
        expect(strCount('', 'z')).toStrictEqual(0);
    });
});