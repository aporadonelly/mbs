import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import * as reactRedux from 'react-redux';
import toJson from 'enzyme-to-json';
import LoginForm from '../auth/LoginForm';

configure({ adapter: new Adapter() });

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

beforeEach(() => {
    useSelectorMock.mockClear();
});

describe('renders Login Form', () => {
    const onLoginClick = jest.fn();
    const onUpdateField = jest.fn();
    it('initial view', () => {
        useSelectorMock.mockReturnValue({
            auth: {
                username: '',
                password: '',
                isAuthInvalid: false,
                isFormSubmitted: false
            }
        });
        const wrapper = shallow(<LoginForm onLogin={onLoginClick} onUpdateField={onUpdateField} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('error view', () => {
        useSelectorMock.mockReturnValue({
            auth: {
                username: 'sample@email.com',
                password: 'sample',
                isAuthInvalid: true,
                isFormSubmitted: true,
                error: {
                    code: 'NotAuthorizedException'
                }
            }
        });
        const wrapper = shallow(<LoginForm onLogin={onLoginClick} onUpdateField={onUpdateField} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
