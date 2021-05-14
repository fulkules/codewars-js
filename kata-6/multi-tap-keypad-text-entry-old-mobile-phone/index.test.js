const presses = require('./index');

describe('presses', function () {
    it('should return a number', function () {
        expect(typeof presses("LOL")).toBe('number');
    });

    it('should work for simple examples', function () {
        expect(presses("LOL")).toStrictEqual(9);
    });

    it('should work for phrases with spaces', function () {
        expect(presses("HOW R U")).toStrictEqual(13);
    });

    it('should work for phrases with numbers', function () {
        expect(presses("WHERE DO U WANT 2 MEET L8R")).toStrictEqual(47);
    });

    it('should allow input in lowercase', function () {
        expect(presses("lol")).toStrictEqual(9);
    });
});