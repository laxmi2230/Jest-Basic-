const reverseString = require('./reversestring');


test('reverse string function exists', () => {
    expect(reverseString).toBeDefined()
});

//lowercase
test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

//upercase
test('String reverses', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});