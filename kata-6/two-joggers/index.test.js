const nbrOfLaps = require('./index');

describe(nbrOfLaps, () => {
    it('should return an array', () => {
        expect(nbrOfLaps(5, 3)).toBeInstanceOf(Array);
    });
    it('should return', () => {
        expect(nbrOfLaps(5,3)).toEqual([3,5]);
        expect(nbrOfLaps(4,6)).toEqual([3,2]);
        expect(nbrOfLaps(5,5)).toEqual([1,1]);
    });
});