const thirt = require('./index');

describe('thirt', function() {
    it('should return a number', function() {
        expect(typeof thirt(8529)).toBe('number');
    });
    test('returns', function() {
        expect(thirt(8529)).toBe(79);
        expect(thirt(85299258)).toBe(31);
        expect(thirt(5634)).toBe(57);
        expect(thirt(1111111111)).toBe(71);
        expect(thirt(987654321)).toBe(30);
    });
});