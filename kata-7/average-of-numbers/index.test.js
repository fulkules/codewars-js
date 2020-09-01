const averages = require('./index');

describe(averages, () => {
    it('should return an array', () => {
        expect(averages([1, 3, 5, 1, -10])).toBeInstanceOf(Array);
    });
    it('should return an array the averages of each integer-number and his follower, if there is one', () => {
        expect(averages([1, 3, 5, 1, -10])).toStrictEqual([2, 4, 3, -4.5]);
        expect(averages([1])).toStrictEqual([]);
        expect(averages()).toStrictEqual([]);
    });
});