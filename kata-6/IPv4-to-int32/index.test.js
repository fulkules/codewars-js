const ipToInt32 = require('./index');

describe('ipToInt32', function() {
    it('should return a number', function() {
        expect(typeof ipToInt32("128.32.10.1")).toBe('number');
    });
    test('returns the ip address represented as a 32 bit number', function() {
        expect(ipToInt32("128.32.10.1")).toStrictEqual(2149583361);
    });
});