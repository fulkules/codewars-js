const capitalize = require('./index');

describe(capitalize, () => {
    it('should return an array', () => {
        expect(capitalize('abcdef')).toBeInstanceOf(Array);
    });
    it('should return two strings in an array with alternating capitalized letters', () => {
        expect(capitalize('abcdef')).toStrictEqual(['AbCdEf', 'aBcDeF']);
        expect(capitalize('codewars')).toStrictEqual(['CoDeWaRs', 'cOdEwArS']);
    });
});