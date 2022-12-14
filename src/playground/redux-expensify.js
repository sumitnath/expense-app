import { createStore, combineReducers } from "redux";
import uuid from 'uuid';
// Add expenses
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    })
    //Remove expense
const removeExpense = ({ id } = {}) => ({
        type: 'REMOVE_EXPENSE',
        id: id
    })
    // Edit Expense
const editExpense = (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    })
    // set text filter
const setTextFilter = (text = '') => ({
        type: 'SET_TEXT_FILTER',
        text
    })
    // sort by date
const sortByDate = () => ({
        type: 'SORT_BY_DATE'
    })
    // sort by amount
const sortByAmount = () => ({
        type: 'SORT_BY_AMOUNT'
    })
    // SET START DATE
const setStartDate = (startDate) => ({
        type: 'SET_START_DATE',
        startDate
    })
    // SET END DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

//working with multiple reducer
// 1st reducer
const expenseReduderDefault = [];
const expenseReduder = (state = expenseReduderDefault, action) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
                return [...state, action.expense];
            case 'REMOVE_EXPENSE':
                return state.filter(({ id }) => id !== action.id);
            case 'EDIT_EXPENSE':
                return state.map((expense) => {
                    if (expense.id === action.id) {
                        return {...expense, ...action.updates }
                    } else {
                        return expense;
                    }
                });
            default:
                return state;
        }
    }
    // 2nd reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
        switch (action.type) {
            case 'SET_TEXT_FILTER':
                return {...state, text: action.text };
            case 'SORT_BY_DATE':
                return {...state, sortBy: 'date' };
            case 'SORT_BY_AMOUNT':
                return {...state, sortBy: 'amount' };
            case 'SET_START_DATE':
                return {...state,
                    startDate: action.startDate
                }
            case 'SET_END_DATE':
                return {...state, endDate: action.endDate }
            default:
                return state;
        }
    }
    ///// get visible data
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
        return expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
            return startDateMatch && endDateMatch && textMatch
        }).sort((a, b) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1
            } else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1
            }
        })
    }
    // sttore creation
const store = createStore(
    combineReducers({
        expenses: expenseReduder,
        filters: filterReducer
    })
)
store.subscribe(() => {
    const state = store.getState()
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
        //console.log(store.getState())
    console.log(visibleExpense)
})
const demoState = {
    // !st reducer
    expense: [{
        id: 'ahshsjesijsdjd',
        description: 'jan rent',
        note: ' this is final payment for the address',
        amount: 54000,
        createdAt: 0
    }],
    // 2nd reducer
    filter: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 5000,
    createdAt: 300
}))
const expenseTwo = store.dispatch(addExpense({
        description: 'coffee',
        amount: 8000,
        createdAt: 1000
    }))
    //     //store.dispatch(removeExpense({ id: expenseOne.expense.id }));
    // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 703 }));
    //store.dispatch(setTextFilter('e'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate())
    // store.dispatch(setStartDate(125));
    // // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(1250));