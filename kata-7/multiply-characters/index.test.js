const spam = require('./index');

describe(spam, () => {
    it('should return a string', () => {
        expect(typeof spam(6)).toBe('string');
    });
    it('should return the string repeated "n" times without a break', () => {
        expect(spam(6)).toStrictEqual('huehuehuehuehuehue');
        expect(spam(14)).toStrictEqual('huehuehuehuehuehuehuehuehuehuehuehuehuehue');
    });
});