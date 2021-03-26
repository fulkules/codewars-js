const solution = require('./index');

describe('solution', function() {
    it('should return a number', function() {
        expect(typeof solution([1, 3, 6, 4, 1, 2])).toBe('number');
    });
    test('returns a new string separated by camel case words', function() {
        expect(solution([1, 3, 6, 4, 1, 2])).toStrictEqual(5);
        expect(solution([1, 2, 3])).toStrictEqual(4);
        expect(solution([-1, -3])).toStrictEqual(4);
    });
});