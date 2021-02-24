const peopleWithAgeDrink = require('./index');

describe(peopleWithAgeDrink, () => {
    it('should return a string', () => {
        expect(typeof peopleWithAgeDrink(22)).toBe('string');
    });
    it('Should return the appropriate drink by age given', () => {
        expect(peopleWithAgeDrink(30)).toStrictEqual('drink whisky');
        expect(peopleWithAgeDrink(20)).toStrictEqual('drink beer');
        expect(peopleWithAgeDrink(18)).toStrictEqual('drink beer');
        expect(peopleWithAgeDrink(17)).toStrictEqual('drink coke');
        expect(peopleWithAgeDrink(13)).toStrictEqual('drink toddy');
    });
});