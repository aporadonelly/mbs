import { config } from '../config';

const { MBS_CMS_API_URL } = config;
// Server Address
export const SERVER_ADDRESS = MBS_CMS_API_URL;
export const CMS_ENDPOINT = 'cms-api';

export const authActionType = {
    LOGIN_USER_SUCCESS: 'login_user_success',
    LOGIN_USER_FAIL: 'login_user_fail',
    LOGOUT_USER_SUCCESS: 'logout_user_success',
    LOGOUT_USER_FAIL: 'logout_user_fail',
    UPDATE_AUTH: 'update_auth',
    // Forgot Password
    FORGOT_PASSWORD_TRIGGER_SUCCESS: 'forgot_password_trigger_success',
    FORGOT_PASSWORD_TRIGGER_FAIL: 'forgot_password_trigger_fail',
    VERIFY_FORGOT_PASSWORD_SUCCESS: 'verify_forgot_password_success',
    VERIFY_FORGOT_PASSWORD_FAIL: 'verify_forgot_password_fail'
};
