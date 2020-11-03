const howMuchILoveYou = require('./index');

describe('howMuchILoveYou', function() {
    it('should return a string', function() {
        expect(typeof howMuchILoveYou(7)).toBe('string');
    });
    test('returns the string of how much love by number of petals', function() {
        expect(howMuchILoveYou(7)).toStrictEqual('I love you');
        expect(howMuchILoveYou(3)).toStrictEqual('a lot');
        expect(howMuchILoveYou(6)).toStrictEqual('not at all');
        expect(howMuchILoveYou(390)).toStrictEqual('not at all');
        expect(howMuchILoveYou(102)).toStrictEqual('not at all');
    });
});