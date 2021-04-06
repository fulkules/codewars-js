const solution = require('./index');

describe('solution', function() {
    it('should return a number', function() {
        expect(typeof solution('XXI')).toBe('number');
    });
    test('returns the number for the given roman numeral', function() {
        expect(solution('XXI')).toStrictEqual(21);
        expect(solution('I')).toStrictEqual(1);
        expect(solution('IV')).toStrictEqual(4);
        expect(solution('MMVIII')).toStrictEqual(2008);
        expect(solution('MDCLXVI')).toStrictEqual(1666);
    });
});