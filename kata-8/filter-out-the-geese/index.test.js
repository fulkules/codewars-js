const gooseFilter = require('./index');

describe('gooseFilter', function(){
    it('should return an array', () => {
        expect(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])).toBeInstanceOf(Array);
    });
    it('should return a filtered array with the same elements without geese', () => {
        expect(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])).toStrictEqual(["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    });
});