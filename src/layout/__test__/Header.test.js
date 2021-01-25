import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';
import Header from '../Header';

Enzyme.configure({ adapter: new Adapter() });
jest.unmock('react-redux');

const mockStore = configureMockStore({ thunk });

// mock auth reducer state
const store = mockStore({
    auth: {
        username: 'sample@samplecom',
        password: 'sample'
    }
});

const useDispatchMock = jest.spyOn(reactRedux, 'useSelector');

beforeEach(() => {
    useDispatchMock.mockClear();
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

test('display Header Component', () => {
    const wrapper = render(
        <Provider store={store}>
            <Header />
        </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});
