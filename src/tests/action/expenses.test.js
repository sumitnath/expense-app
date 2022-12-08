import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense,
    startAddExpense,
    removeExpense,
    startRemoveExpense,
    editExpense,
    startEditExpense,
    setExpenses,
    startSetExpenses
} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt }
    });
    database.ref('expenses').set(expenseData).then(() =>
        done()
    )
});

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        })
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

test('should edit expense in the firebase database', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = { description: 'lamp' };
    store.dispatch(startEditExpense(id, updates))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            });
            return database.ref(`expenses/${id}`).once('value');

        }).then((snapshot) => {
            expect(snapshot.val().description).toBe(updates.description);
            done()
        })
})





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
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch expense action from firebase ', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    })
})