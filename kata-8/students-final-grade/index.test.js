const finalGrade = require('./index');

describe(finalGrade, () => {
    it('should return a number', () => {
        expect(typeof finalGrade(100, 12)).toBe('number');
    });
    it('should returnthe final grade of a student depending on exam grade and number of completed projects', () => {
        expect(finalGrade(100, 12)).toStrictEqual(100);
        expect(finalGrade(85, 5)).toStrictEqual(90);
    });
});