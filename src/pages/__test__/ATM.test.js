import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ATM from '../ATM';

Enzyme.configure({ adapter: new Adapter() });

const mockPath = jest.fn();
const setup = (props = { path: mockPath }) => shallow(<ATM {...props} />);

const findByTest = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders ATM page', () => {
    const wrapper = setup();
    const fullApp = findByTest(wrapper, 'ATM_Component');
    expect(fullApp.length).toBe(1);
});
