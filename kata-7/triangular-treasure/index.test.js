const triangular = require('./index');

describe(triangular, () => {
    test('test 1', () => {
        expect(triangular(2)).toEqual(3);
        expect(triangular(3)).toEqual(6);
        expect(triangular(4)).toEqual(10);
        expect(triangular(-10)).toEqual(0);
    })
});