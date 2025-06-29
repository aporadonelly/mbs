import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Branches from '../Branches';

Enzyme.configure({ adapter: new Adapter() });

const mockPath = jest.fn();
const setup = (props = { path: mockPath }) => shallow(<Branches {...props} />);

const findByTest = (wrapper, val) => wrapper.find(`[data-testid="${val}"]`);

test('renders Branches page', () => {
    const wrapper = setup();
    const fullApp = findByTest(wrapper, 'branches-component');
    expect(fullApp.length).toBe(1);
});
