const countSmileys = require('./index');

test('Test 1', () => {
    expect(countSmileys([':)', ';(', ';}', ':-D'])).toStrictEqual(2);
});

test('Test 2', () => {
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toStrictEqual(3);
});

test('Test 3', () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toStrictEqual(1);
});