const partlist = require('./index');

describe(partlist, () => {
    it('should return an array', () => {
        expect(partlist(["cdIw", "tzIy", "xDu", "rThG"])).toBeInstanceOf(Array);
    });
    it('should return an array of arrays with possible combinations of how to divide a list', () => {
        expect(partlist(["cdIw", "tzIy", "xDu", "rThG"])).toStrictEqual([["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
    });
});