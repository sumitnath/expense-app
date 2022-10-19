import { createStore, combineReducers } from "redux"
import expenseReduder from '../reducers/expenses'
import filterReducer from '../reducers/filters'
// sttore creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReduder,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store
}