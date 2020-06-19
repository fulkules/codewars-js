const stray = require('./index');

describe(stray, () => {
   test('test 1', () => {
       expect(stray([1,1,2])).toStrictEqual(2);
       expect(stray([17, 17, 3, 17, 17, 17, 17])).toStrictEqual(3);
       expect(stray([8,8,8,7,8,8,8])).toStrictEqual(7);
   })
});