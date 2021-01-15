const createPhoneNumber = require('./index');

describe('createPhoneNumber', function(){
    it('should return a string', () => {
        expect(typeof createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('string');
    });
    it('should return a phone number formatted string from the array of numbers', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual("(123) 456-7890");
        expect(createPhoneNumber([5,5,5,8,6,7,5,3,0,9])).toStrictEqual("(555) 867-5309");
        expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0,1])).toStrictEqual("There must be 10 digits in a phone number");
    });
});