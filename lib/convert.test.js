const convert = require('./convert')

test('multiply 4 by 4', () => {
    expect(convert.convertFunc(4,4)).toBe(16)
})