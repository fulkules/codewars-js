const otherAngle = require('./index');

describe('otherAngle', function() {
    it('should return a number', function() {
        expect(typeof otherAngle(30, 60)).toBe('number');
    });
    test('returns the interior angle of a triangle', function() {
        expect(otherAngle(30, 60)).toStrictEqual(90);
        expect(otherAngle(43, 78)).toStrictEqual(59);
        expect(otherAngle(60, 60)).toStrictEqual(60);
    });
});