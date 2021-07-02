const preFizz = require('./index');

describe(preFizz, () => {
    it('should return an array', () => {
        expect(preFizz([], [4,5])).toBeInstanceOf(Array);
    });
    it('should return', () => {
        expect(preFizz(1)).toEqual([1]);
        expect(preFizz(3)).toEqual([1,2,3]);,
        expect(preFizz(5)).toEq,ual([1,2,3,4,5]);
    });
});