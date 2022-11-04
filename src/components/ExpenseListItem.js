import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
//import { connect } from 'react-redux';
// we donot need the redux store as we have dont have remove here, so we remove connect()
// challenge remove remove button from  the ExpenseListItem.js and add it into EditExpensePage.js


const ExpenseListItem = ({ id, description, amount, createdAt }) => (

        <div>
        <Link to = { `/edit/${id}` } >
        <h3> { description } </h3>
         </Link> 
         <p> {numeral(amount/100).format('$0,0.00' )

         }
         
         -- {moment(createdAt).format('MMMMM Do, YYYY') } </p>


        </div>

    )
    //export default connect()(ExpenseListItem)
export default ExpenseListItem
