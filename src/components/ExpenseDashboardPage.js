import React from 'react';
//import { BrowserRouter,Route,Switch,Link,NavLink } from "react-router-dom";
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummery from './ExpenseSummery';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
    <ExpenseSummery/>
    <ExpenseListFilter/>
    <ExpenseList/>
  </div>
);


  export default ExpenseDashboardPage;