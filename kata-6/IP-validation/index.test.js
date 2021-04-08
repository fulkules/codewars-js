const isValidIP = require('./index');

describe('isValidIP', function() {
    it('should return a boolean', function() {
        expect(typeof isValidIP("0.0.0.0")).toBe('boolean');
    });
    test('returns whether or not the str is in IPv4 dot-decimal format', function() {
        expect(isValidIP("0.0.0.0")).toBe(true);
        expect(isValidIP("12.255.56.1")).toStrictEqual(true);
        expect(isValidIP('123,45,67,89')).toStrictEqual(false);
        expect(isValidIP('1.2.3.4.5')).toStrictEqual(false);
        expect(isValidIP('1.2.3.4 ')).toStrictEqual(false);
        expect(isValidIP('01.02.03.04')).toStrictEqual(false);
        expect(isValidIP('12.34.56.-7')).toStrictEqual(false);
        expect(isValidIP('123.456.78.90')).toStrictEqual(false);
        expect(isValidIP('123.045.067.089')).toStrictEqual(false);
        expect(isValidIP('1e0.1e1.1e2.2e2')).toStrictEqual(false);
    });
});