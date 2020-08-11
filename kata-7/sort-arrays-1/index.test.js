const sortme = require('./index');

describe(sortme, () => {
    it('should return an array', () => {
        expect(sortme(['Barry', 'Diana', 'Arthur', 'Bruce', 'Clark', 'Victor'])).toBeInstanceOf(Array);
    });
    it('should return a sorted array', () => {
        expect(sortme(['Barry', 'Diana', 'Arthur', 'Bruce', 'Clark', 'Victor'])).toStrictEqual(['Arthur', 'Barry', 'Bruce', 'Clark', 'Diana', 'Victor']);
    });
});