const basicOp = require('./index');

describe('basicOp', function() {
    it('should handle four diffrent math operations (+, -, *, /)', function() {
        expect(basicOp('+', 4, 7)).toStrictEqual(11);
        expect(basicOp('-', 15, 18)).toStrictEqual(-3);
        expect(basicOp('*', 5, 5)).toStrictEqual(25);
        expect(basicOp('/', 49, 7)).toStrictEqual(7);
    });
})
