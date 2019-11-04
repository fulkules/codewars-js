const moveZeroes = require('./index');

describe('moveZeroes', function() {
    it('should format correctly', function() {
      expect(moveZeroes([false,1,0,1,2,0,1,3,"a"])).toStrictEqual([false,1,1,2,1,3,"a",0,0]);
      expect(moveZeroes([1,2,0,1,0,1,0,3,0,1])).toStrictEqual([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]);
    });
  });