import React from "react";
import { connect } from 'react-redux';
import numeral from "numeral";
import SelectExpenses from  '../selector/expenses';
import SelectExpenseTotal from  '../selector/expenses-total'


export const ExpenseSummery = ({expenseCount,expenseTotal}) =>{
const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
const formatedExpenseTotal = numeral(expenseTotal/100).format('$0.0.00')
 return (
    <div>
    <h1> Viewing {expenseCount} {expenseWord} totalling {formatedExpenseTotal}</h1>
    </div>
 );
};
const mapStateToProps = (state)=>{
    const visibleExpense = SelectExpenses(state.expenses, state.filters);
    return{
        expenseCount : visibleExpense.length,
        expenseTotal :SelectExpenseTotal(visibleExpense)
    }
};
export default connect(mapStateToProps)(ExpenseSummery);


