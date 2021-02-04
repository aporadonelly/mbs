import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure, render } from 'enzyme';
import * as reactRedux from 'react-redux';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SetPassword from '../../auth/SetPassword';
import { userStatus } from '../../../reducers/constants';

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
        newPassword: '',
        codeError: {
            code: ''
        },
        passwordError: {
            code: '',
            message: ''
        }
    }
});

const successStore = mockStore({
    auth: {
        newPassword: '',
        codeError: {
            code: ''
        },
        passwordError: {
            code: '',
            message: ''
        },
        isSetPasswordSuccess: true
    }
});

// mock auth reducer state
const setPasswordStore = mockStore({
    auth: {
        status: userStatus.PASSWORD_CHANGE_NEEDED,
        newPassword: '',
        codeError: {
            code: ''
        },
        passwordError: {
            code: '',
            message: ''
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

describe('renders SetPassword Page', () => {
    it('initial view', () => {
        const wrapper = render(
            <Provider store={store}>
                <SetPassword />
            </Provider>
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('success view', () => {
        const wrapper = render(
            <Provider store={successStore}>
                <SetPassword />
            </Provider>
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('view of set password for initial user', () => {
        const wrapper = render(
            <Provider store={setPasswordStore}>
                <SetPassword />
            </Provider>
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
