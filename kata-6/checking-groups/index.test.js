const groupCheck = require('./index');

describe('groupCheck', function(){
    it('should return a boolean', () => {
        expect(typeof groupCheck('[])')).toBe('boolean');
    });
    it('should return', () => {
        expect(groupCheck('[])')).toBe(false);
        expect(groupCheck('()')).toBe(true);
        expect(groupCheck('({})')).toBe(true);
        expect(groupCheck('({})')).toBe(true);
        expect(groupCheck('[[]()]')).toBe(true);
        expect(groupCheck('[{()}]')).toBe(true);
        expect(groupCheck('{(})')).toBe(false);
    });
});