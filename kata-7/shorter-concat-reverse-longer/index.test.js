const shorter_reverse_longer = require('./index');

describe('shorter_reverse_longer', function() {
    it('should return a string', function() {
        expect(typeof shorter_reverse_longer("first", "abcde")).toBe('string');
    });
    test('returns the string of shortest+reverse(longest)+shortest', function() {
        expect(shorter_reverse_longer("hello", "bob")).toEqual('bobollehbob');
        expect(shorter_reverse_longer("first", "abcde")).toEqual('abcdetsrifabcde');
    });
});