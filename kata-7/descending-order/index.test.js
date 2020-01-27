const descendingOrder = require('./index');

describe(descendingOrder, () => {
    test ('should return a number with all digits in descending order', () => {
        expect(descendingOrder(21445)).toStrictEqual(54421);
        expect(descendingOrder(145263)).toStrictEqual(654321);
        expect(descendingOrder(123456789)).toStrictEqual(987654321);
        expect(descendingOrder(0)).toStrictEqual(0);
    })
})