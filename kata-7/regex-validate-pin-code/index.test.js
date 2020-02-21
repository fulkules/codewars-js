const validatePIN = require('./index');

describe(validatePIN, () => {
    it ('should return a boolean if valid PIN of 4 or 6 digits', () => {
        expect(validatePIN("1234")).toStrictEqual(true);
        expect(validatePIN("12345")).toStrictEqual(false);
        expect(validatePIN("a234")).toStrictEqual(false);
        expect(validatePIN("123456")).toStrictEqual(true);
        expect(validatePIN("")).toStrictEqual(false);
    });
})