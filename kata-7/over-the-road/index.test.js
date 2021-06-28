const overTheRoad = require('./index');

describe(overTheRoad, () => {
    it('should return a number', () => {
        expect(typeof (overTheRoad(1, 3))).toBe('number');
    });
    it('should return a human-readable string of the obj arg', () => {
        expect(overTheRoad(1, 3)).toStrictEqual(6);
        expect(overTheRoad(3, 3)).toStrictEqual(4);
        expect(overTheRoad(2, 3)).toStrictEqual(5);
        expect(overTheRoad(3, 5)).toStrictEqual(8);
        expect(overTheRoad(7, 11)).toStrictEqual(16);
        expect(overTheRoad(23633656673, 310027696726)).toStrictEqual(596421736780);
    });
});