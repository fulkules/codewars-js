const toWeirdCase = require('./index');

describe('toWeirdCase', function() {
    it('should return a string', function() {
        expect(typeof toWeirdCase('This')).toBe('string');
    });
    test('returns an alternating case string', function() {
        expect(toWeirdCase('this')).toStrictEqual('ThIs');
        expect(toWeirdCase('is')).toStrictEqual('Is');
        expect(toWeirdCase('This is a test')).toStrictEqual('ThIs Is A TeSt');
    });
});