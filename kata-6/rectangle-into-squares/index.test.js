const sqInRect = require('./index');

describe('sqInRect', function(){
    it('should return an array', () => {
        expect(sqInRect(5, 3)).toBeInstanceOf(Array);
    });
    it('should return an array with the size of each of the squares', () => {
        expect(sqInRect(5, 5)).toStrictEqual(null);
        expect(sqInRect(5, 3)).toStrictEqual([3, 2, 1, 1]);
        expect(sqInRect(3, 5)).toStrictEqual([3, 2, 1, 1]);
        expect(sqInRect(20, 14)).toStrictEqual([14, 6, 6, 2, 2, 2]);
    });
});
