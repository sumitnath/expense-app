import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
import toJSON from "enzyme-to-json";

test('Should render ExpenseList Item correctly', () => {
const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
expect(toJSON(wrapper)).toMatchSnapshot()
 })

 test('Should render ExpenseList Item without a Item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
     })