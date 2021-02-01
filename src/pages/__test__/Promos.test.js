import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Promos from '../Promos';

Enzyme.configure({ adapter: new Adapter() });

const mockPath = jest.fn();
const setup = (props = { path: mockPath }) => shallow(<Promos {...props} />);

const findByTest = (wrapper, val) => wrapper.find(`[data-testid="${val}"]`);

test('renders Promos page', () => {
    const wrapper = setup();
    const fullApp = findByTest(wrapper, 'promos-component');
    expect(fullApp.length).toBe(1);
});
