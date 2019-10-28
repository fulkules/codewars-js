const pigIt = require ('./index');

test('Test 1', () => {
    expect(pigIt('Pig latin is cool')).toStrictEqual('igPay atinlay siay oolcay');
})
test('Test 2', () => {
    expect(pigIt('This is my string')).toStrictEqual('hisTay siay ymay tringsay');
})
test('Test 3', () => {
    expect(pigIt('O tempora o mores !')).toStrictEqual('Oay emporatay oay oresmay !');
})