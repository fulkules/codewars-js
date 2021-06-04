const Xbonacci = require('./index');

describe(Xbonacci, () => {
    it('should return an array', () => {
        expect(Xbonacci([0,1], 10)).toBeInstanceOf(Array);
    });
    it('should return', () => {
        expect(Xbonacci([0,1], 10)).toEqual([0,1,1,2,3,5,8,13,21,34]);
        expect(Xbonacci([1,1], 10)).toEqual([1,1,2,3,5,8,13,21,34,55]);
        expect(Xbonacci([1,1,1,1], 10)).toEqual([1,1,1,1,4,7,13,25,49,94]);
        expect(Xbonacci([0,0,0,0,1],10)).toEqual([0,0,0,0,1,1,2,4,8,16]);
        expect(Xbonacci([1,0,0,0,0,0,1],10)).toEqual([1,0,0,0,0,0,1,2,3,6]);
        expect(Xbonacci([1,2,3,4,5,6,7,8,9,0],9)).toEqual([1,2,3,4,5,6,7,8,9]);
        expect(Xbonacci([1,2,3,4,5,6,7,8,9,0],0)).toEqual([]);
        expect(Xbonacci([1,0,0,0,0,0,0,0,0,0],20)).toEqual([1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]);
        expect(Xbonacci([5,15,4,20,12,20,18,17,10,17,6,19,3,13,0,3,18,9,8,9],16)).toEqual([5,15,4,20,12,20,18,17,10,17,6,19,3,13,0,3]);
    });
});