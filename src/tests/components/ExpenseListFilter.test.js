import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilter } from '../fixtures/filters';


let 
setEndDate,
setStartDate,
setTextFilter,
sortByDate,
sortByAmount,
wrapper;

beforeEach(()=>{
setEndDate= jest.fn();
setStartDate = jest.fn();
setTextFilter= jest.fn();
sortByDate = jest.fn();
sortByAmount = jest.fn();
wrapper = shallow(
    <ExpenseListFilter 
    filters ={filters}
    setEndDate ={setEndDate}
    setStartDate={setStartDate}
    setTextFilter={setTextFilter}
    sortByDate ={sortByDate}
    sortByAmount ={sortByAmount}
    />
)
})

test('should render expense List filter correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should render expense List filter with alt data correctly', ()=>{
    wrapper.setProps({
        filters:altFilter
    })
    expect( wrapper).toMatchSnapshot();
})

test('should handle test change',()=>{
const value= 'rent'
wrapper.find('input').simulate('change',{
    target:{value}
});
expect(setTextFilter).toHaveBeenLastCalledWith(value);
})
test('shouls sort by date',()=>{
    const value = 'date';
    wrapper.setProps({
        filters:altFilter
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    })
   expect(sortByDate).toHaveBeenCalled(); 
})
test('should sort by amount',()=>{
    const value = 'amount';
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalled();
})
test('should handle date focus change',()=>{
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})
