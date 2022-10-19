import { createStore } from 'redux'

//action generator
const incrementCount = ({ increamentBy = 1 } = {}) => ({
    type: 'INCREMENT',
    increamentBy: increamentBy
})
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})
const setCount = ({ count }) => ({
    type: 'SET',
    count: count
})
const resetCount = () => ({
        type: 'RESET'
    })
    // reducer
const countReducer = (state = { count: 0 }, action) => {
        switch (action.type) {
            case 'INCREMENT':

                return { count: state.count + action.increamentBy };
            case 'DECREMENT':

                return { count: state.count - action.decrementBy };
            case 'SET':
                return { count: action.count }
            case 'RESET':
                return { count: 0 };
            default:
                return state;
        }
    }
    // const store = createStore((state = { count: 0 }, action) => {
    //     switch (action.type) {
    //         case 'INCREMENT':

//             return { count: state.count + action.increamentBy };
//         case 'DECREMENT':

//             return { count: state.count - action.decrementBy };
//         case 'SET':
//             return { count: action.count }
//         case 'RESET':
//             return { count: 0 };
//         default:
//             return state;
//     }
// });

const store = createStore(countReducer)
store.subscribe(() => {
    console.log(store.getState())
})
console.log(store.getState());

store.dispatch(incrementCount());
store.dispatch(incrementCount());
//store.dispatch({ type: 'INCREMENT', increamentBy: 5 });
store.dispatch(incrementCount({ increamentBy: 5 }));
//store.dispatch({ type: 'RESET' });
store.dispatch(resetCount())
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 9 }));
//store.dispatch({ type: 'SET', count: 101 })
store.dispatch(setCount({ count: 101 }));

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'agdjdkdldiejeiej',
        description: 'Rent',
        note: 'This is the final payment of nthat address',
        amount: 5400,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        enddate: undefined
    }
};

const user = {
    name: 'Ram',
    age: 24
}
console.log({...user, city: 'jdjd' })
console.log('jvnvn')