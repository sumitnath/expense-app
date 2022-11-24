import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses'
import { startAddExpense } from '../actions/expenses';
// getting action geberator 
export class AddExpensePage extends React.Component{
  onSubmit=(expense)=>{
    //console.log(expense);
   // props.dispatch(addExpense(expense))
   this.props.startAddExpense(expense)
    this.props.history.push('/')
  };
  render(){
  return (
    <div>
    <h1> Add Expenses</h1>
    <ExpenseForm 
    onSubmit={this.onSubmit} />
  </div>
  )
 } 
}

  const mapDispatchToProps = (dispatch) =>{
    return {
      startAddExpense : (expense)=> dispatch(startAddExpense(expense))
        }
  }
//to pass the data to redux store we have to import connect 
// we donot need anything from the state we will keep 1st component of connect empty

export default connect(undefined, mapDispatchToProps)(AddExpensePage)