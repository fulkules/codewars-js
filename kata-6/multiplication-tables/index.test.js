const multiplicationTable = require('./index');

describe(multiplicationTable, () => {
    it('should return an array', () => {
        expect(multiplicationTable(2,2)).toBeInstanceOf(Array);
    });
    it('should return', () => {
        expect(multiplicationTable(2,2)).toEqual([[1,2],[2,4]]);
        expect(multiplicationTable(3,3)).toEqual([[1,2,3],[2,4,6],[3,6,9]]);
        expect(multiplicationTable(3,4)).toEqual([[1,2,3,4],[2,4,6,8],[3,6,9,12]]);
        expect(multiplicationTable(4,4)).toEqual([[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]);
        expect(multiplicationTable(2,5)).toEqual([[1,2,3,4,5],[2,4,6,8,10]]);
    });
});