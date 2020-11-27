const enough = require('./index');

describe('enough', function() {
    it('should return a number', function() {
        expect(typeof enough(100, 60, 50)).toBe('number');
    });
    it('should return 0 if there is enough space or the number of passengers beyond capacity', function() {
        expect(enough(100, 60, 50)).toStrictEqual(10);
    });
});