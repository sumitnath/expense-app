import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses'
import {removeExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
  
 editExpense = (expense)=>{
      console.log('update',expense);
   //  this.props.dispatch(editExpense(this.props.expense.id,expense))
   this.props.increment(this.props.expense.id,expense)
     this.props.history.push('/')   
    }
  removeExpense =()=>{ 
    this.props.decrement({id:this.props.expense.id} );
    this.props.history.push('/')
  }
  render(){
return (
  <div>
  <h3> Edit Your expense</h3> 
    
    <ExpenseForm 
    expense ={this.props.expense}
    onSubmit={this.editExpense}
    />
    
  <button onClick ={this.removeExpense}>Remove</button>
    
  </div>
   )
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        increment: (id,expense) => dispatch(editExpense(id, expense)),
        decrement: (data) => dispatch(removeExpense(data))   
    }
  }

const mapStateToProps =(state,props ) =>{
  return{
  expense: state.expenses.find((expense)=>
   {return expense.id === props.match.params.id})
   }
  }
    
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)


