/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../Dashboard';

Enzyme.configure({ adapter: new Adapter() });

const mockPath = jest.fn();
const setup = (props = { path: mockPath }, state = null) => shallow(<Dashboard {...props} />);

const findByTest = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders Dashboard page', () => {
    const wrapper = setup();
    const fullApp = findByTest(wrapper, 'Dashboard_Component');
    expect(fullApp.length).toBe(1);
    expect(wrapper.length).toBe(1);
});
