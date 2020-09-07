const wordsToMarks = require('./index');

describe(wordsToMarks, () => {
    it('should return a number', () => {
        expect(typeof wordsToMarks('attitude')).toBe('number');
    });
    it('should return the sum of the index position + 1 in the alphabet', () => {
        expect(wordsToMarks('attitude')).toStrictEqual(100);
        expect(wordsToMarks('love')).toStrictEqual(54);
        expect(wordsToMarks('friendship')).toStrictEqual(108);
        expect(wordsToMarks('family')).toStrictEqual(66);
    });
});