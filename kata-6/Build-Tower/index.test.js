const towerBuilder = require('./index');

test('Test 1', () => {
    expect(towerBuilder(3)).toStrictEqual(
        [
            '  *  ', 
            ' *** ', 
            '*****'
        ]
    );
});
test('Test 2', () => {
    expect(towerBuilder(6)).toStrictEqual(
        [
            '     *     ', 
            '    ***    ', 
            '   *****   ', 
            '  *******  ', 
            ' ********* ', 
            '***********'
        ]
    );
});