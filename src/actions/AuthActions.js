import Amplify, { Auth } from 'aws-amplify';
import { authActionType } from './constants';
import { awsAuthConfig } from '../config';

Amplify.configure({
    Auth: awsAuthConfig
});
// Login User
export const login = (username, password) => async dispatch => {
    try {
        const user = await Auth.signIn(username, password);
        const session = await Auth.currentSession();
        dispatch({
            type: authActionType.LOGIN_USER_SUCCESS,
            payload: {
                user,
                session
            }
        });
    } catch (error) {
        console.log('error', error);
        dispatch({
            type: authActionType.LOGIN_USER_FAIL,
            payload: error
        });
    }
};

// Forgot Password
export const triggerForgotPassword = username => async dispatch => {
    try {
        const data = await Auth.forgotPassword(username);
        await dispatch({
            type: authActionType.FORGOT_PASSWORD_TRIGGER_SUCCESS,
            payload: data
        });
    } catch (error) {
        console.log('error', error);
        await dispatch({
            type: authActionType.FORGOT_PASSWORD_TRIGGER_FAIL,
            payload: error
        });
    }
};

// Forgot Password
export const verifyForgotPassword = (username, code, newPassword) => async dispatch => {
    try {
        const data = await Auth.forgotPasswordSubmit(username, code, newPassword);
        dispatch({
            type: authActionType.VERIFY_FORGOT_PASSWORD_SUCCESS,
            payload: data
        });
    } catch (error) {
        console.log('error', error);
        dispatch({
            type: authActionType.VERIFY_FORGOT_PASSWORD_FAIL,
            payload: error
        });
    }
};

export const verifyAuth = () => async dispatch => {
    const session = await Auth.currentSession();
    const user = await Auth.currentAuthenticatedUser();
    dispatch({
        type: authActionType.LOGIN_USER_SUCCESS,
        payload: {
            user,
            session
        }
    });
};

// Logout User
export const logout = () => async dispatch => {
    try {
        await Auth.signOut();
        dispatch({
            type: authActionType.LOGOUT_USER_SUCCESS,
            payload: 'Successfully Removed User'
        });
    } catch (error) {
        console.log('error', error);
        dispatch({
            type: authActionType.LOGOUT_USER_FAIL
        });
    }
};

// Update Login Reducer
export const updateAuth = (prop, value) => ({
    type: authActionType.UPDATE_AUTH,
    payload: { prop, value }
});
