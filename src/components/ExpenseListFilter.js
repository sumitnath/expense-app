import React from "react";
import { connect } from "react-redux";
import{setTextFilter,sortByDate,sortByAmount, setStartDate,setEndDate} from '../actions/filters'
import { DateRangePicker } from "react-dates";

// converting the stateless component to class component
//const ExpenseListFilter = (props) => (
export class ExpenseListFilter extends React.Component {
   state ={
      calenderFocused: null
   }
   onDatesChange =({startDate:startDate,endDate:endDate})=>{
     this.props.setStartDate(startDate);
     this.props.setEndDate(endDate);
   }
   onFocusChange = (calenderFocused)=>{
     this.setState(()=>({calenderFocused:calenderFocused}))
   }
   onTextChange = (e)=>{
             this.props.setTextFilter(e.target.value)
          //console.log(e.target.value)
         }
   onSortChange =   (e)=>{
          if(e.target.value === 'date'){
             this.props.sortByDate()
          }else if(e.target.value === 'amount'){
             this.props.sortByAmount()
          }
         }    
   render(){
      return(
         <div>
         <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
         <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
         <option value ="date">Date</option>
         <option value="amount">Amount</option>
         </select>
         <DateRangePicker
           startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          // startDateId={this.props.filters.startDate.toString()} // PropTypes.string.isRequired,
           endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          // endDateId={this.props.filters.endDate.toString()}// PropTypes.string.isRequired,
           onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
           focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
           onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
           numberOfMonths= {1}
           isOutsideRange= {()=>false}
           showClearDates={true} />
              </div>
      )
    }
   }

const mapStateToProps = (state)=>{
     return{
    filters:state.filters
 }
}
const mapDispatchToProps = (dispatch)=>{
   return {
      setEndDate: (endDate)=>dispatch(setEndDate(endDate)),
      setStartDate: (startDate)=>dispatch(setStartDate(startDate)),
      setTextFilter:(text)=>dispatch(setTextFilter(text)),
      sortByDate: ()=>dispatch(sortByDate()),
      sortByAmount:()=>dispatch(sortByAmount())
 
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter)