import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import expenseReduder from '../reducers/expenses'
import filterReducer from '../reducers/filters'
import thunk from "redux-thunk"
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// sttore creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReduder,
            filters: filterReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );

    return store
}