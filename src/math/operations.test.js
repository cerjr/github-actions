//operations.test.js
const operations = require('./operations')

test('Must sum two values correctly', () => {
    expect(operations.add(2, 2)).toEqual(4)
});

test('Must subtract two values correctly', () => {
    expect(operations.sub(2, 2)).toEqual(0)
});

test('Must multiply two values correctly', () => {
    expect(operations.mult(2, 2)).toEqual(4)
});

test('Must divide two values correctly', () => {
    expect(operations.div(4, 2)).toEqual(2)
});

test('Must power two values correctly', () => {
    expect(operations.pow(2, 2)).toEqual(4)
});

test('Must get sqrt correctly', () => {
    expect(operations.sqrt(4)).toEqual(2)
});
