const rentalCarCost = require('./index');

describe(rentalCarCost, () => {
    it('should return a number', () => {
        expect(typeof rentalCarCost(21, 6)).toBe('number');
    });
    it('should return the total cost for the different amount of days (d)', () => {
        expect(rentalCarCost(1)).toStrictEqual(40);
        expect(rentalCarCost(3)).toStrictEqual(100);
    });
});