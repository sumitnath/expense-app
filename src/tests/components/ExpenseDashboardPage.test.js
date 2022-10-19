import React from "react";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test('should render Dashboard page correctly', () => {
    const wrapper = shallow( < ExpenseDashboardPage / > )
    expect(toJson(wrapper)).toMatchSnapshot()
})