const getAge = require('./index');

describe('getAge', function() {
    it('should return a number', function() {
        expect(typeof getAge('5 years old')).toBe('number');
    });
    test('returns the age as an int', function() {
        expect(getAge('6 years old')).toStrictEqual(6);
        expect(getAge('4 years old')).toStrictEqual(4);
    });
});