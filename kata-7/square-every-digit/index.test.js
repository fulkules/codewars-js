const squareDigits = require('./index');

describe(squareDigits, () => {
    it ('should return the square of every digit of the given number', () => {
        expect(squareDigits(9119)).toStrictEqual(811181);
        
    })
})