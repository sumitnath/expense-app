import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses"

import moment from 'moment'


test('should render ExpenseForm  correctly', () => {
    const wrapper = shallow( < ExpenseForm / > )
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow( <ExpenseForm expense={expenses[0]} / > )
    expect(toJson(wrapper)).toMatchSnapshot()
})


test('should render error for invalid form submission', () => {
    const wrapper = shallow( <ExpenseForm/ > )
    wrapper.find('form').simulate('submit',{
   preventDefault:()=>{}      
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value= 'New Description';
    const wrapper = shallow( <ExpenseForm/ > )
    wrapper.find('input').at(0).simulate('change',{
 target:{value}   
    })
    expect(wrapper.state('description')).toBe(value)
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should set description on Note change', () => {
    const value= 'New Note';
    const wrapper = shallow( <ExpenseForm/ > )
    wrapper.find('textarea').simulate('change',{
 target:{value}   
    })
    expect(wrapper.state('note')).toBe(value)
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should set AMOUNT on iNPUT change', () => {
    const value= '23.50';
    const wrapper = shallow( <ExpenseForm/ > )
    wrapper.find('input').at(1).simulate('change',{
 target:{value}   
    })
    expect(wrapper.state('amount')).toBe(value)
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should set AMOUNT on iNPUT to be invalid', () => {
    const value= '23.52430';
    const wrapper = shallow( <ExpenseForm/ > )
    wrapper.find('input').at(1).simulate('change',{
 target:{value}   
    })
    expect(wrapper.state('amount')).toBe('')
    expect(toJson(wrapper)).toMatchSnapshot()
}) 

test('should call on submit props for valid form submission',()=>{
    const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit ={onSubmitSpy}/>)
  wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt
  });
})

test('set new date on date change  onDateChange props',()=>{
 const now = moment()
 const wrapper = shallow(<ExpenseForm/>)
 wrapper.find('SingleDatePicker').prop('onDateChange')(now)
 expect(wrapper.state('createdAt')).toEqual(now)
})

test('set    calendarFocused prop',()=>{
 const calFocused = false    ;
 const wrapper = shallow(<ExpenseForm/>)
 wrapper.find('SingleDatePicker').prop('onFocusChange')({calFocused})
 expect(wrapper.state('calenderFocused')).toBe(calFocused)
})