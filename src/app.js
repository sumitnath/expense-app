import React from 'react'
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selector/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'


const store = configureStore()

//// removing dummy data
// store.dispatch(addExpense({
//     description: 'Water Bill',
//     amount: 5000,
//     createdAt: 300
// }))
// store.dispatch(addExpense({
//     description: 'Gas Bill',
//     amount: 8000,
//     createdAt: 1000,
//     note: 'Gas for house'
// }))
// store.dispatch(addExpense({
//     description: 'Rent',
//     amount: 15000,

// }))


// //  store.dispatch(setTextFilter('water'))

//  setTimeout(()=>{
//             store.dispatch(setTextFilter('bill'))
//         },3000)
// const state = store.getState()
// const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpense)
console.log('test')
const jsx = ( <Provider store = { store } >
    <AppRouter />
    </Provider>

);

ReactDOM.render(<p>loading.....</p>, document.getElementById('app'))
store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'))
})
