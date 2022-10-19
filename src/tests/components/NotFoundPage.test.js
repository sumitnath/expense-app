import React from "react";
import NotFound from "../../components/NotFoundPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test('should render NotFounndPage correctly', () => {
    const wrapper = shallow( < NotFound / > )
    expect(toJson(wrapper)).toMatchSnapshot()
})