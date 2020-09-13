const getNames = require('./index');

describe(getNames, () => {
    it('should return an array', () => {
        expect(getNames(
            [
                    {name: 'Joe', age: 20},
                    {name: 'Bill', age: 30},
                    {name: 'Kate', age: 23}
                  ]
        )).toBeInstanceOf(Array);
    });
    it('should return the missing number in the array', () => {
        expect(getNames(
            [
                {name: 'Joe', age: 20},
                {name: 'Bill', age: 30},
                {name: 'Kate', age: 23}
            ]
        )).toStrictEqual(['Joe', 'Bill', 'Kate']);
    });
});