const isAnagram = require('./anagram');
const Anagram = require('./anagram');


test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
})


test('"cinema" is anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
})

test('"Dormitory" is anagram of "Dirty room##"', () => {
    expect(isAnagram('Dormitory', 'Dirty room##')).toBeTruthy();
})

test('"Hello" is not an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
})