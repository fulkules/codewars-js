const boolToWord = require('./index');

describe('boolToWord', function() {
    it('should return a string from a given number', function() {
        expect(boolToWord(true)).toStrictEqual("Yes");
        expect(boolToWord(false)).toStrictEqual("No");
    });
})
