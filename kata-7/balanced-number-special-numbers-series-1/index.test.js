const balancedNum = require('./index');

describe('balancedNum', function() {
    it('should return a string', function() {
        expect(typeof balancedNum(7)).toBe('string');
    });
    test('returns string indicating if sum of right and left of the middle digit(s) of a number are equal', function() {
        expect(balancedNum(7)).toEqual('Balanced');
        expect(balancedNum(13)).toEqual('Balanced');
        expect(balancedNum(424)).toEqual('Balanced');
        expect(balancedNum(4224)).toEqual('Balanced');
        expect(balancedNum(432)).toEqual('Not Balanced');
        expect(balancedNum(4312)).toEqual('Not Balanced');
    });
});