const findMissingLetter = require('./index');

describe('findMissingLetter', function() {
    it('should return an string', function() {
        expect(typeof findMissingLetter([ 'a', 'b', 'c', 'd', 'f' ])).toBe('string');
    });
    test('returns the missing letter', function() {
        expect(findMissingLetter([ 'a', 'b', 'c', 'd', 'f' ])).toEqual('e');
        expect(findMissingLetter([ 'O','Q','R','S' ])).toEqual('P');
    });
});