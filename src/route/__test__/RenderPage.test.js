/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RenderPage from '../RenderPage';

Enzyme.configure({ adapter: new Adapter() });

const mockPath = jest.fn();
const setup = (props = { path: mockPath }, state = null) => shallow(<RenderPage {...props} />);

const findByTest = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders Layout Page', () => {
    const wrapper = setup();
    const fullApp = findByTest(wrapper, 'Page_Layout');
    expect(fullApp.length).toBe(1);
});

test('renders routed of Main Page Category', () => {
    const wrapper = setup();
    const DashboardItem = findByTest(wrapper, 'MainPage_Dashboard');
    const ThemeManagerItem = findByTest(wrapper, 'MainPage_Theme Manager');
    const BankDetailsItem = findByTest(wrapper, 'MainPage_Bank Details');
    expect(DashboardItem.length).toBe(1);
    expect(ThemeManagerItem.length).toBe(1);
    expect(BankDetailsItem.length).toBe(1);
});

test('renders routed user pages', () => {
    const wrapper = setup();
    const fullApp = findByTest(wrapper, 'ManagePage_Users');
    expect(fullApp.length).toBe(1);
    expect(fullApp.props().component).toBeTruthy();
    expect(fullApp.props().path).toBe('/users');
});
