import AuthReducer from '../AuthReducer';
import { authActionType } from '../../actions/constants';
import { userStatus, results } from '../constants';

describe(' Auth Reducer test', () => {
    const INITIAL_STATE = {
        username: '',
        password: '',
        user: {
            email: null,
            jwtToken: null,
            idToken: null,
            refreshToken: null,
            role: null,
            firstName: '',
            lastName: ''
        },
        status: userStatus.LOGGED_OUT,
        result: '',
        message: '',
        error: {},
        isFormSubmitted: false,
        isAuthInvalid: false,
        code: '',
        newPassword: '',
        newPasswordCopy: '',
        isSetPasswordSuccess: false,
        forgotPasswordError: {},
        isForgotPasswordFormSubmitted: false,
        passwordError: {},
        isSetPasswordFormSubmitted: false,
        codeError: {}
    };

    it('Returns Initial State', () => {
        expect(AuthReducer(INITIAL_STATE, { type: '' })).toEqual({
            ...INITIAL_STATE
        });
    });

    it('Returns Initial State', () => {
        expect(AuthReducer(undefined, { type: '' })).toEqual({
            ...INITIAL_STATE
        });
    });

    it('Returns Update Auth', () => {
        expect(
            AuthReducer(INITIAL_STATE, {
                type: authActionType.UPDATE_AUTH,
                payload: {
                    prop: 'username',
                    value: 'sample@email.com'
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            username: 'sample@email.com'
        });
    });

    it('Returns Login Success', () => {
        expect(
            AuthReducer(INITIAL_STATE, {
                type: authActionType.LOGIN_USER_SUCCESS,
                payload: {
                    user: {
                        attributes: {
                            email: 'sample@email.com',
                            given_name: 'Sample',
                            family_name: 'User'
                        }
                    },
                    session: {
                        accessToken: { jwtToken: 'eyJraWQiOiJsbm1Mb1hxOXJHS3hhZ241TzMzOE40a' },
                        idToken: {
                            jwtToken: 'eyJraWQiOiJUa2JDWWpsUVFzQUtyWTRjQ',
                            payload: {
                                'custom:role': 'Staff'
                            }
                        },
                        refreshToken: { token: 'eyJjdHkiOiJKV1QiLCJlbm' }
                    }
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            user: {
                email: 'sample@email.com',
                jwtToken: 'eyJraWQiOiJsbm1Mb1hxOXJHS3hhZ241TzMzOE40a',
                idToken: 'eyJraWQiOiJUa2JDWWpsUVFzQUtyWTRjQ',
                refreshToken: 'eyJjdHkiOiJKV1QiLCJlbm',
                firstName: 'Sample',
                lastName: 'User',
                role: 'Staff'
            },
            status: userStatus.LOGGED_IN,
            result: results.SUCCESS
        });
    });

    it('Returns Login Fail', () => {
        expect(
            AuthReducer(INITIAL_STATE, {
                type: authActionType.LOGIN_USER_FAIL,
                payload: {
                    code: 'Login error',
                    message: 'Incorrect Username or Password',
                    name: 'error'
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            status: userStatus.UNAUTHORIZED,
            error: {
                code: 'Login error',
                message: 'Incorrect Username or Password',
                name: 'error'
            },
            isAuthInvalid: true,
            // message: 'Incorrect Username or Password',
            result: results.FAIL
        });
    });

    it('Returns Logout User Success', () => {
        expect(
            AuthReducer(INITIAL_STATE, {
                type: authActionType.LOGOUT_USER_SUCCESS
            })
        ).toEqual({
            ...INITIAL_STATE,
            result: results.SUCCESS
        });
    });

    it('Returns Logout User Fail', () => {
        expect(
            AuthReducer(INITIAL_STATE, {
                type: authActionType.LOGOUT_USER_FAIL
            })
        ).toEqual({
            ...INITIAL_STATE,
            result: results.FAIL,
            message: 'Failed to Logout User'
        });
    });

    it('Returns Forgot Password Trigger Success', () => {
        expect(
            AuthReducer(INITIAL_STATE, {
                type: authActionType.FORGOT_PASSWORD_TRIGGER_SUCCESS
            })
        ).toEqual({
            ...INITIAL_STATE,
            result: results.SUCCESS
        });
    });

    it('Returns Forgot Password Trigger Fail', () => {
        expect(
            AuthReducer(INITIAL_STATE, {
                type: authActionType.FORGOT_PASSWORD_TRIGGER_FAIL,
                payload: {
                    code: 'Error',
                    message: 'There is an error'
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            forgotPasswordError: {
                code: 'Error',
                message: 'There is an error'
            },
            result: results.FAIL
        });
    });

    it('Returns Verify Forgot Password Success', () => {
        expect(
            AuthReducer(INITIAL_STATE, {
                type: authActionType.VERIFY_FORGOT_PASSWORD_SUCCESS
            })
        ).toEqual({
            ...INITIAL_STATE,
            isSetPasswordSuccess: true,
            result: results.SUCCESS
        });
    });

    it('Returns Verify Forgot Password Success', () => {
        expect(
            AuthReducer(INITIAL_STATE, {
                type: authActionType.VERIFY_FORGOT_PASSWORD_FAIL,
                payload: {
                    code: 'Error',
                    message: 'There is an error'
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            codeError: {
                code: 'Error',
                message: 'There is an error'
            },
            result: results.FAIL
        });
    });
});
