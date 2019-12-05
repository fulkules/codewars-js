const makeNegative = require('./index');

describe('makeNegative', function() {
    it('should return the second arg (str) repeated the first arg (n) times', function() {
        expect(makeNegative(1)).toStrictEqual(-1);
        expect(makeNegative(-5)).toStrictEqual(-5);
        expect(makeNegative(0)).toStrictEqual(0);
        expect(makeNegative(0.12)).toStrictEqual(-0.12);
    });
})