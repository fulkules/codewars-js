const getVolumeOfCuboid = require('./index');

describe('getVolumeOfCuboid', function(){
    it('should return an number', () => {
        expect(typeof getVolumeOfCuboid(1,2,2)).toBe('number');
    });
    it('should return', () => {
        expect(getVolumeOfCuboid(1,2,2)).toEqual(4);
        expect(getVolumeOfCuboid(6.3,2,5)).toEqual(63);
    });
});