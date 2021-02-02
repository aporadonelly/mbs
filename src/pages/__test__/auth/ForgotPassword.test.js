import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure, render } from 'enzyme';
import * as reactRedux from 'react-redux';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ForgotPassword from '../../auth/ForgotPassword';

configure({ adapter: new Adapter() });
jest.unmock('react-redux');

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

beforeEach(() => {
    useSelectorMock.mockClear();
});

const mockStore = configureMockStore({ thunk });

// mock auth reducer state
const store = mockStore({
    auth: {
        username: '',
        forgotPasswordError: {
            code: ''
        }
    }
});

jest.mock('react-router-dom', () => ({
    useRouteMatch: jest.fn().mockReturnValue({
        location: '/'
    }),
    useHistory: jest.fn().mockReturnValue({
        history: {
            push: jest.fn()
        }
    })
}));

describe('renders ForgotPassword Page', () => {
    it('initial view', () => {
        const wrapper = render(
            <Provider store={store}>
                <ForgotPassword />
            </Provider>
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
