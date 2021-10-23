//operations.test.js
const operations = require('./operations')

test('Must sum two values correctly', () => {
    expect(operations.add(2, 2)).toEqual(4)
})