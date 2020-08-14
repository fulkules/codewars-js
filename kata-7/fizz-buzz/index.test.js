const fizzbuzz = require('./index');

describe(fizzbuzz, () => {
    it('should return an array', () => {
        expect(fizzbuzz(10)).toBeInstanceOf(Array);
    });
    it('should fizzify 15 numbers correctly', () => {
        expect(fizzbuzz(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    });
});