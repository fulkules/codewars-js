const bmi = require('./index');

describe(bmi, () => {
    it('should return a string', () => {
        expect(typeof bmi(80, 1.8)).toBe('string');
    });
    it('should return the category result of bmi calculation', () => {
        expect(bmi(80, 1.8)).toStrictEqual('Normal');
    });
});