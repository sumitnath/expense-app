import database from '../../firebase/firebase';
import { addExpense, startAddExpense, removeExpense, editExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const createMockStore = configureMockStore([thunk]);

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense action object', () => {
    const action = editExpense('125ass', { note: 'absdhgdjkd' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '125ass',
        updates: {
            note: 'absdhgdjkd'
        }
    });
});

// test addExpense with provided value  ist was with react now is with redux
test('should setup add expense action object with provided values', () => {
    // const expenseData = {
    //     description: 'dhdh',
    //     note: 'dhdhd',
    //     amount: 0,
    //     createdAt: 0
    // }
    //const action = addExpense(expenseData)
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',

        //expense: {...expenseData,
        //  id: expect.any(String) }
        expense: expenses[2]

    });
});


//test addExpense with value  with redux
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mat',
        amount: 50,
        note: 'this ismat',
        createdAt: 500
    };
    // const action = addExpense()
    // expect(action).toEqual({
    //     type: 'ADD_EXPENSE',

    //     expense: {
    //         id: expect.any(String),
    //         description: '',
    //         note: '',
    //         amount: 0,
    //         createdAt: 0
    //     }
    // })
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`)
            .once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})


//test addExpense with default value  ist was with react now is with redux
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    // const action = addExpense()
    // expect(action).toEqual({
    //     type: 'ADD_EXPENSE',

    //     expense: {
    //         id: expect.any(String),
    //         description: '',
    //         note: '',
    //         amount: 0,
    //         createdAt: 0
    //     }
    // })
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`)
            .once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    })
})