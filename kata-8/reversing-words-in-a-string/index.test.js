const reverse = require('./index');

describe('reverse', function() {
    it('should return a string', function() {
        expect(typeof reverse('I am an expert at this')).toBe('string');
    });
    test('returns the words in reverse order', function() {
        expect(reverse('I am an expert at this')).toStrictEqual('this at expert an am I');
        expect(reverse('no one cares')).toStrictEqual('cares one no');
        expect(reverse('Hi There.')).toStrictEqual('There. Hi');
    });
});