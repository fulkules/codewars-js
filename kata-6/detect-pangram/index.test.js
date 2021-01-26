const isPangram = require('./index');

describe('isPangram', function() {
    it('should return a boolean', function() {
        expect(typeof isPangram("The quick brown fox jumps over the lazy dog.")).toBe('boolean');
    });
    test('returns boolean whether or not a sentence contains every letter of the alphabet at least once', function() {
        expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBe(true);
        expect(isPangram("This is definitely not a pangram.")).toBe(false);
    });
});