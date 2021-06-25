const generateShape = require('./index');

describe(generateShape, () => {
    it('should return a string', () => {
        expect(typeof (generateShape(8))).toBe('string');
    });
    it('should return a human-readable string of the obj arg', () => {
        expect(generateShape(3)).toStrictEqual('+++\n+++\n+++');
        expect(generateShape(8)).toStrictEqual('++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++');
    });
});