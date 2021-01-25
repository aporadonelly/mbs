import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ThemeManager from '../ThemeManager';

Enzyme.configure({ adapter: new Adapter() });

const mockPath = jest.fn();
const setup = (props = { path: mockPath }) => shallow(<ThemeManager {...props} />);

const findByTest = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders ThemeManager page', () => {
    const wrapper = setup();
    const fullApp = findByTest(wrapper, 'ThemeManager_Component');
    expect(fullApp.length).toBe(1);
});
