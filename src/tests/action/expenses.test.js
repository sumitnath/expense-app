import { addExpense, removeExpense, editExpense } from "../../actions/expenses";


test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense action object', () => {
    const action = editExpense('125ass', { note: 'absdhgdjkd' })
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '125ass',
        updates: {
            note: 'absdhgdjkd'
        }
    })
})

// test addExpense with provided value
test('shoiuld set up add expense action object with provided value', () => {
    const expenseData = {
        description: 'dhdh',
        note: 'dhdhd',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',

        expense: {...expenseData,
            id: expect.any(String)
        }
    })
})


//test addExpense with default value
test('shoiuld set up add expense action object with default value', () => {

    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',

        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})