import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses'
import { removeExpense } from '../actions/expenses'

// changing stateless function component to class based component in EditExpensePage 
const EditExpensePage = (props) => {
    console.log(props)
    return ( <div>
        <h3> Edit Your expense </h3>  
        <p> The id is: { props.match.params.id } </p>
         <ExpenseForm expense = { props.expense }
        onSubmit = {
            (expense) => {
                console.log('update', expense);
                props.dispatch(editExpense(this.props.expense.id,expense))
                props.history.push('/')
            }
        }
        />

        <button onClick = {() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
             props.history.push('/')
            }
        } > Remove </button>

         </div>
    );
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => { return expense.id === props.match.params.id })
    }
}



export default connect(mapStateToProps)(EditExpensePage)