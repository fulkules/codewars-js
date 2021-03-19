const tripleTrouble = require('./index');

describe('tripleTrouble', function(){
    it('should return a string', () => {
        expect(typeof tripleTrouble('aa', 'bb', 'cc')).toBe('string');
    });
    it('should return a new string that combines all letters in groups by position', () => {
        expect(tripleTrouble('aa', 'bb', 'cc')).toStrictEqual('abcabc');
        expect(tripleTrouble("Bm", "aa", "tn")).toStrictEqual('Batman');
    });
});