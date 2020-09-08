const vowelIndices = require('./index');

describe(vowelIndices, () => {
    it('should return an array', () => {
        expect(vowelIndices('apple')).toBeInstanceOf(Array);
    });
    it('should return the index position (plus 1) of all vowels in the string arg', () => {
        expect(vowelIndices('apple')).toStrictEqual([1,5]);
        expect(vowelIndices('mmmmm')).toStrictEqual([]);
        expect(vowelIndices('super')).toStrictEqual([2,4]);
        expect(vowelIndices('supercalifragilisticexpialidocious')).toStrictEqual([2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
    });
});