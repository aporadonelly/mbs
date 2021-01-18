import { authActionType } from '../actions/constants';
import { userStatus, results } from './constants';

const INITIAL_STATE = {
    username: '',
    password: '',
    user: {
        email: null,
        jwtToken: null,
        idToken: null,
        refreshToken: null,
        permissions: null,
        role: null
    },
    status: userStatus.LOGGED_OUT,
    result: '',
    message: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case authActionType.UPDATE_AUTH:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };
        case authActionType.LOGIN_USER_SUCCESS: {
            const { user, session } = action.payload;
            console.log('login called', user);
            return {
                ...state,
                status: userStatus.LOGGED_IN,
                user: {
                    email: user.attributes.email,
                    jwtToken: session.accessToken.jwtToken,
                    idToken: session.idToken.jwtToken,
                    refreshToken: session.refreshToken.token,
                    permissions: session.idToken.payload[`custom:modules`],
                    role: session.idToken.payload[`custom:role`]
                },
                result: results.SUCCESS
            };
        }
        case authActionType.LOGIN_USER_FAIL: {
            return {
                ...state,
                status: userStatus.UNAUTHORIZED,
                result: results.FAIL
            };
        }
        case authActionType.LOGOUT_USER_SUCCESS: {
            return {
                ...INITIAL_STATE,
                result: results.Success
            };
        }
        case authActionType.LOGOUT_USER_FAIL:
            return { ...state, result: results.FAIL, message: 'Failed to Logout User' };
        default:
            return state;
    }
}
