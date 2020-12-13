const twoSort = require('./index');

describe('twoSort', function() {
    it('should return a string', function() {
        expect(typeof twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])).toBe('string');
    });
    test('returns the result of func1 of bool is truthy, otherwwise result of func2', function() {
        expect(twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])).toEqual('b***i***t***c***o***i***n');
        expect(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])).toEqual('a***r***e');
    });
});