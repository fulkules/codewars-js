const race = require('./index');

describe(race, () => {
    it('should return an array', () => {
        expect(race(720, 850, 70)).toBeInstanceOf(Array);
    });
    it('should return the hours, minutes, and seconds it will take v2 to catch up to v1', () => {
        expect(race(720, 850, 70)).toEqual([0, 32, 18]);
        expect(race(80, 91, 37)).toEqual([3, 21, 49]);
        expect(race(80, 100, 40)).toEqual([2, 0, 0]);
        expect(race(100, 80, 40)).toBe(null);
    });
});