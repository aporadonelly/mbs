import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Products from '../Products';

Enzyme.configure({ adapter: new Adapter() });

const mockPath = jest.fn();
const setup = (props = { path: mockPath }) => shallow(<Products {...props} />);

const findByTest = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders Products page', () => {
    const wrapper = setup();
    const fullApp = findByTest(wrapper, 'Products_Component');
    expect(fullApp.length).toBe(1);
});
