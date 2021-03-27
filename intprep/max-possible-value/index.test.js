const solution = require('./index');

describe('solution', function() {
    it('should return a number', function() {
        expect(typeof solution(268)).toBe('number');
    });
    test('returns the maximum number possible from all digits', function() {
        expect(solution(268)).toStrictEqual(5268);
        expect(solution(670)).toStrictEqual(6750);
        expect(solution(0)).toStrictEqual(50);
        expect(solution(-999)).toStrictEqual(-5999);
    });
});