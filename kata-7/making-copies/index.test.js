const copyList = require('./index');

describe(copyList, () => {
    it('should return an array', () => {
        expect(copyList([1,2,3,4])).toBeInstanceOf(Array);
    });
    it('should return a COPY of an array', () => {
        expect(copyList([1,2,3,4])).toEqual([1,2,3,4]);
        expect(copyList([1,[2, [2]],3,4])).toEqual([1,[2, [2]],3,4]);
    });
});