const addLetters = require('./index');

describe(addLetters, () => {
    it('should return a string', () => {
        expect(typeof addLetters(['y', 'c', 'b'])).toBe('string');
    });
    it('should return ', () => {
        expect(addLetters(['y', 'c', 'b'])).toStrictEqual('d');
        expect(addLetters([])).toStrictEqual('z');
    });
});