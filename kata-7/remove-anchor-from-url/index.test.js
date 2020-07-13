const removeUrlAnchor = require('./index');

describe(removeUrlAnchor, () => {
    test('should return a string with the base url', () => {
        expect(removeUrlAnchor('www.codewars.com#about')).toStrictEqual('www.codewars.com');
        expect(removeUrlAnchor('www.codewars.com?page=1')).toStrictEqual('www.codewars.com?page=1');
    });
});