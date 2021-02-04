import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import Header from '../Header';
import { userStatus } from '../../reducers/constants';

Enzyme.configure({ adapter: new Adapter() });
const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

beforeEach(() => {
    useSelectorMock.mockClear();
});

const mockStore = configureMockStore({ thunk });

// mock auth reducer state
const store = mockStore({
    auth: {
        username: '',
        password: '',
        status: userStatus.LOGGED_IN,
        user: {
            roleCode: 'admin',
            role: 'Admin',
            firstName: 'Sample',
            lastName: 'User'
        }
    }
});

jest.mock('react-router-dom', () => ({
    useHistory: jest.fn().mockReturnValue({
        history: {
            replace: jest.fn()
        }
    })
}));

describe('Header', () => {
    it('displays header component', () => {
        const wrapper = render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
