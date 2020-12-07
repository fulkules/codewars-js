const checkAlive = require('./index');

describe('checkAlive', function() {
    it('should return a number', function() {
        expect(typeof checkAlive('Take me to tinseltown')).toBe('number');
    });
    test('returns the length of the longest word', function() {
        expect(checkAlive('Take me to tinseltown')).toEqual(10);
        expect(checkAlive('Succulents flexitarian echo park listicle')).toEqual(11);
    });
});