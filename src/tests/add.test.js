const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`
test('should add two values', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
})



test('should greet with name', () => {
    const mgreeting = generateGreeting('radha')
    expect(mgreeting).toBe('Hello radha!')
})