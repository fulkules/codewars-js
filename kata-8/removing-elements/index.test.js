const removeEveryOther = require('./index');

describe(removeEveryOther, () => {
    it('should return an array', () => {
        expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).toBeInstanceOf(Array);
    });
    it('should return an array with every other item', () => {
        expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).toStrictEqual(['Hello', 'Hello Again']);
    });
});