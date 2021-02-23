const nextId = require('./index');

describe(nextId, () => {
    it('should return a number', () => {
        expect(typeof nextId([0,1,2,3,5])).toBe('number');
    });
    it('Should return the smallest unused number in an array of consecutive numbers', () => {
        expect(nextId([0,1,2,3,5])).toStrictEqual(4);
        expect(nextId([0,1,2,3,4,5,6,7,8,9,10])).toStrictEqual(11);
        expect(nextId([ 1, 2, 0, 2, 3 ])).toStrictEqual(4);
        expect(nextId([ 1, 0, 2, 2, 2, 7, 3, 1 ])).toStrictEqual(4);
    });
});