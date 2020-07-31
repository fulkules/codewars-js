const predictAge = require('./index');

describe(predictAge, () => {
    it('should return a number', () => {
        expect(typeof predictAge(2)).toBe('number');
    });
    it('should return the estimated age you will live to', () => {
        expect((predictAge(65,60,75,55,60,63,64,45))).toStrictEqual(86);
    });
});