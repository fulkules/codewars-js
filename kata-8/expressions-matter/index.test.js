const expressionMatter = require('./index');

describe(expressionMatter, () => {
    it('should return a number', () => {
        expect(typeof expressionMatter(2,1,2)).toBe('number');
    });
    it('should return the maximum value obtainable with addition and/or multiplication', () => {
        expect(expressionMatter(2,1,2)).toEqual(6);
        expect(expressionMatter(1,2,3)).toEqual(9);
        expect(expressionMatter(3,5,7)).toEqual(105);
        expect(expressionMatter(1,6,1)).toEqual(8);
    });
});