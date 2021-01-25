import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BankDetails from '../BankDetails';

Enzyme.configure({ adapter: new Adapter() });

const mockPath = jest.fn();
const setup = (props = { path: mockPath }) => shallow(<BankDetails {...props} />);

const findByTest = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders ATM page', () => {
    const wrapper = setup();
    const fullApp = findByTest(wrapper, 'BankDetails_Component');
    expect(fullApp.length).toBe(1);
});
