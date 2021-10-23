//operations.test.js
const operations = require('./operations')

test('Must sum two values correctly', () => {
    expect(operations.sum(2, 2)).toEqual(4)
})