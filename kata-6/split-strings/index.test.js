const solution = require('./index');

describe(solution, () => {
    it('should return an Array', () => {
        expect(solution('abcdef')).toBeInstanceOf(Array);
    });
    it('should return an array of strings or pairs of characters', () => {
        expect(solution('abcdef')).toStrictEqual(['ab', 'cd', 'ef']);
        expect(solution('abcdefg')).toStrictEqual(['ab', 'cd', 'ef', 'g_']);
    });
});