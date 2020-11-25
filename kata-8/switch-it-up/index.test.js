const switchItUp = require('./index');

describe('switchItUp', function() {
    it('should return a string', function() {
        expect(typeof switchItUp(1)).toBe('string');
    });
    it('should return the string of the number arg', function() {
        expect(switchItUp(1)).toStrictEqual('One');
        expect(switchItUp(3)).toStrictEqual('Three');
        expect(switchItUp(7)).toStrictEqual('Seven');
    });
});