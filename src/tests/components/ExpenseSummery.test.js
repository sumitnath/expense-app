import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummery } from "../../components/ExpenseSummery";

test('should correctly render Expense summary with 1 expense', () => {
            const wrapper = shallow( <ExpenseSummery expenseCount = { 1 }
                expenseTotal = { 233 }   />) 
                expect(wrapper).toMatchSnapshot();
            })

            
test('should correctly render Expense summary with multiple expense', () => {
            const wrapper = shallow( <ExpenseSummery expenseCount = { 21 }
                expenseTotal = { 225555533 }   />) 
                expect(wrapper).toMatchSnapshot();
            })