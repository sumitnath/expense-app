import expenseReduder from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
    const state = expenseReduder(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const id = expenses[1].id
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    }
    const state = expenseReduder(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const id = '4'
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    }
    const state = expenseReduder(expenses, action)
    expect(state).toEqual(expenses)
})
test('should add expense ', () => {
    const expense = {
        id: 4,
        description: 'Revsnt',
        note: '',
        amount: 1966,
        createdAt: moment(0).subtract(2, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReduder(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit expense by id', () => {
    const amount = 2500;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { amount }
    }
    const state = expenseReduder(expenses, action)
    expect(state[1].amount).toEqual(amount)
})
test('should not edit expense if id not found', () => {
    const amount = 5600;
    const id = '4'
    const action = {
        type: 'REMOVE_EXPENSE',
        id,
        updates: {}
    }
    const state = expenseReduder(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expenseReduder(expenses, action)
    expect(state).toEqual([expenses[1]])
})