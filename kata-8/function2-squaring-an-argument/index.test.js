const square = require('./index');

describe('square', function() {
    it('should return a number', function() {
        expect(typeof square(3)).toBe('number');
    });
    it('should return the squared value of the arg', function() {
        expect(square(3)).toStrictEqual(9);
    });
});