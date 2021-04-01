const titleCase = require('./index');

describe('titleCase', function() {
    it('should return a string', function() {
        expect(typeof titleCase('a clash of KINGS', 'a an the of')).toBe('string');
    });
    test('returns a string converted into title case', function() {
        expect(titleCase('')).toStrictEqual('');
        expect(titleCase('a clash of KINGS', 'a an the of')).toStrictEqual('A Clash of Kings');
        expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toStrictEqual('The Wind in the Willows');
        expect(titleCase('the quick brown fox')).toStrictEqual('The Quick Brown Fox');
    });
});