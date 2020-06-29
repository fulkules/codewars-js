const arithmetic = require('./index');

describe(arithmetic, () => {
    test('test 1', () => {
        expect(arithmetic(5, 2, 'add')).toStrictEqual(7);
        expect(arithmetic(8, 2, 'subtract')).toStrictEqual(6);
        expect(arithmetic(5, 2, 'multiply')).toStrictEqual(10);
        expect(arithmetic(8, 2, 'divide')).toStrictEqual(4);
    })
});