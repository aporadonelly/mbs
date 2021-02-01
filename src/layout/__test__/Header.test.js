import 'jsdom-global/register'; // Without need of adding code in beforeEach and afterEach.
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // enzyme adapter for the use of 'mount'
import Header from '../Header';
import reducers from '../../reducers';

Enzyme.configure({ adapter: new Adapter() });

test('display Header Component', () => {
    const store = createStore(reducers, applyMiddleware(thunk));
    const wrapper = mount(
        <Provider store={store}>
            <Header />
        </Provider>
    );
    wrapper.find('[data-testid="menuBtn"]').hostNodes().simulate('click');
    wrapper.find('[data-testid="changePassword"]').hostNodes().simulate('click');
    wrapper.find('[data-testid="logoutMenu"]').hostNodes().simulate('click');
    wrapper.find('[data-testid="dialogBoxCancel"]').hostNodes().simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
});
