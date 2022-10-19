import React from 'react'
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selector/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
const store = configureStore()

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 5000,
    createdAt: 300
}))
store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 8000,
    createdAt: 1000,
    note: 'Gas for house'
}))
store.dispatch(addExpense({
    description: 'Rent',
    amount: 15000,

}))


// //  store.dispatch(setTextFilter('water'))

//  setTimeout(()=>{
//             store.dispatch(setTextFilter('bill'))
//         },3000)
const state = store.getState()
const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpense)

const jsx = ( 
    <Provider store = { store } >
    <AppRouter/>
    </Provider>

)


ReactDOM.render(jsx, document.getElementById('app'))