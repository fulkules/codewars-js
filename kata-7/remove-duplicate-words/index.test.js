const removeDuplicateWords = require('./index');

describe(removeDuplicateWords, () => {
    it('should return a string', () => {
        expect(typeof (removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))).toBe('string');
    });
    it('should return a new string with duplicate words removed', () => {
        expect(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')).toStrictEqual('alpha beta gamma delta');
    });
});