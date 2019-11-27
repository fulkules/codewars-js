const opposite = require('./index');

describe('opposite', function() {
    it('should return the opposite negative number when given a positive', function() {
        expect(opposite(1)).toStrictEqual(-1);
        expect(opposite(7)).toStrictEqual(-7);
    });
    it('should return the opposite positive number when given a negative', function() {
        expect(opposite(-3)).toStrictEqual(3);
        expect(opposite(-13)).toStrictEqual(13);
    });
})