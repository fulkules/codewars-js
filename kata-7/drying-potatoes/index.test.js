const potatoes = require('./index');

describe(potatoes, () => {
    it('should return a number', () => {
        expect(typeof potatoes(82, 127, 80)).toBe('number');
    });
    it('should return the final weight coming out of the oven', () => {
        expect(potatoes(82, 127, 80)).toStrictEqual(114);
        expect(potatoes(93, 129, 91)).toStrictEqual(100);
        expect(potatoes(99, 100, 98)).toStrictEqual(50);
    });
});