const movie = require('./index');

describe(movie, () => {
    it('should return a number', () => {
        expect(typeof (movie(500, 15, 0.9))).toBe('number');
    });
    it('should return the number of trips until buying the card would be a better value', () => {
        expect(movie(500, 15, 0.9)).toStrictEqual(43);
        expect(movie(100, 10, 0.95)).toStrictEqual(24);
    });
});