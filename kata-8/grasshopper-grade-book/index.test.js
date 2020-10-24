const getGrade = require('./index');

describe('getGrade', function() {
    it('should return a string', function() {
        expect(typeof getGrade(95, 90, 93)).toBe('string');
    });
    test('returns the letter grade based on mean of scores', function() {
        expect(getGrade(100, 85, 96)).toStrictEqual('A');
        expect(getGrade(91, 83, 86)).toStrictEqual('B');
        expect(getGrade(72, 82, 72)).toStrictEqual('C');
        expect(getGrade(69, 77, 60)).toStrictEqual('D');
        expect(getGrade(55, 44, 63)).toStrictEqual('F');
    });
});