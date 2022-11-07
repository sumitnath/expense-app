import selectExpenseTotal from '../../selector/expenses-total.js'
import expenses from '../fixtures/expenses'

test('should return 0 if no expense ', () => {
    const res = selectExpenseTotal([]);
    expect(res).toBe(0)
});
test('should return correctly add up single expense', () => {
    const res = selectExpenseTotal([expenses[0]]);
    expect(res).toBe(36)
});

test('should return correctly add up multiple expense', () => {
    const res = selectExpenseTotal(expenses);
    expect(res).toBe(113)
})