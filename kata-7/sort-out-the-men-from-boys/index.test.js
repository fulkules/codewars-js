const menFromBoys = require('./index');

describe('menFromBoys', function() {
    it('should return an array', function() {
        expect(menFromBoys([7,3,14,17])).toBeInstanceOf(Array);
    });
    it('should return the even numbers all before the odd numbers in a new array', function() {
        expect(menFromBoys([7,3,14,17])).toStrictEqual([14,17,7,3]);
        expect(menFromBoys([2,43,95,90,37])).toStrictEqual([2,90,95,43,37]);
        expect(menFromBoys([2,43,95,95,90,90,37])).toStrictEqual([2,90,95,43,37]);
    });
});