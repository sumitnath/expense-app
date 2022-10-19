import React from "react";
//import ReactShallowRender, { createRenderer } from 'react-test-renderer/shallow'
import { shallow } from "enzyme";
import Header from '../../components/Header'
import toJson from 'enzyme-to-json'

test('should render Header correctly ', () => {
    //     const renderer = new ReactShallowRender();
    //     renderer.render( < Header / > )
    //     expect(renderer.getRenderOutput()).toMatchSnapshot()
    //     console.log(renderer.getRenderOutput());
    const wrapper = shallow( < Header / > )
        // expect(wrapper.find('h1').length).toBe(1)
        //  expect(wrapper.find('h1').text()).toBe('Expensify')
    expect(toJson(wrapper)).toMatchSnapshot()
})