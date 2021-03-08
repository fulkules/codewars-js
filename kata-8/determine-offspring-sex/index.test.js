const chromosomeCheck = require('./index');

describe(chromosomeCheck, () => {
    it('should return a string', () => {
        expect(typeof chromosomeCheck('XY')).toBe('string');
    });
    it('should return the sex of offspring based on the chromosome that fertilizes the egg', () => {
        expect(chromosomeCheck('XY')).toStrictEqual("Congratulations! You're going to have a son.");
        expect(chromosomeCheck('XX')).toStrictEqual("Congratulations! You're going to have a daughter.");
    });
});