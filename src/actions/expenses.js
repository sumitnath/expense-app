//import { database } from 'firebase';
import database from '../firebase/firebase';
import uuid from 'uuid';
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense: expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = {
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        };
        return database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};
//Remove expense
export const removeExpense = ({ id } = {}) => ({
        type: 'REMOVE_EXPENSE',
        id: id
    })
    // Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})