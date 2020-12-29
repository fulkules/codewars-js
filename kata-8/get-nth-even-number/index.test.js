const nthEven = require('./index');

describe('nthEven', function(){
    it('should return a number', () => {
        expect(typeof nthEven(3)).toBe('number');
    });
    it('should return the nth even number', () => {
        expect(nthEven(3)).toStrictEqual(4);
        expect(nthEven(1)).toStrictEqual(0);
        expect(nthEven(5)).toStrictEqual(8);
        expect(nthEven(100)).toStrictEqual(198);
        expect(nthEven(1298734)).toStrictEqual(2597466);
    });
});