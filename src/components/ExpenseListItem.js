import React from "react";
import { Link } from "react-router-dom";
//import { connect } from 'react-redux';
// we donot need the redux store as we have dont have remove here, so we remove connect()
// challenge remove remove button from  the ExpenseListItem.js and add it into EditExpensePage.js


const ExpenseListItem = ({ id, description, amount, createdAt }) => (

        <
        div >
        <
        Link to = { `/edit/${id}` } >
        <
        h3 > { description } < /h3> <
        /Link> <
        p > { amount }--{ createdAt } < /p>


        <
        /div>

    )
    //export default connect()(ExpenseListItem)
export default ExpenseListItem