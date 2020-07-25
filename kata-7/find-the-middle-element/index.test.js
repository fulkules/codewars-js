const gimme = require('./index');

describe(gimme, () => {
    it('should return a number', () => {
        expect(typeof (gimme([2,1,3]))).toBe('number');
    });
    it('should return the middle value of a triplet', () => {
        expect(gimme([2,1,3])).toStrictEqual(0);
    });
});