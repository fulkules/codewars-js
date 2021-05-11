const multiplicationTable = require('./index');

describe('multiplicationTable', function() {
    it('should return an array', function() {
        expect(multiplicationTable(3)).toBeInstanceOf(Array);
    });
    test('returns a multiplication table of given size', function() {
        expect(multiplicationTable(3)).toEqual([[1,2,3], [2,4,6], [3,6,9]]);
    });
});