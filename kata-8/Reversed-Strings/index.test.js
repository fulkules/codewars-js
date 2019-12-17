const reverse = require('./index');

describe('reverse', function() {
    it('should reverse and return the given string', function() {
        expect(reverse("hello")).toStrictEqual("olleh");
        expect(reverse("world")).toStrictEqual("dlrow");
    });
})
