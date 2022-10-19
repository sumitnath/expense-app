import React from 'react';
//import { BrowserRouter,Route,Switch,Link,NavLink } from "react-router-dom";
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
    <ExpenseListFilter/>
    <ExpenseList/>
  </div>
);


  export default ExpenseDashboardPage;