const removeExclamationMarks = require('./index');

describe('removeExclamationMarks', function() {
    it('should return a string', function() {
        expect(typeof removeExclamationMarks('Hello World!')).toBe('string');
    });
    test('returns the string without exlclamation marks', function() {
        expect(removeExclamationMarks('Hello World!')).toStrictEqual('Hello World');
    });
});