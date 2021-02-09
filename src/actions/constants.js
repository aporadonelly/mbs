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
    VERIFY_FORGOT_PASSWORD_FAIL: 'verify_forgot_password_fail',
    // Force Change Password
    REQUEST_NEW_PASSWORD: 'request_new_password',
    SET_NEW_PASSWORD_SUCCESS: 'set_new_password_success',
    SET_NEW_PASSWORD_FAIL: 'set_new_password_fail',
    // User role
    FETCH_USER_ROLE_SUCCESS: 'fetch_user_role_success',
    FETCH_USER_ROLE_FAIL: 'fetch_user_role_fail'
};

export const awsParameters = {
    NEW_PASSWORD_REQUIRED: 'NEW_PASSWORD_REQUIRED'
};

export const productsActionType = {
    PRODUCTS_CREATE_SUCCESS: 'product_create_success',
    PRODUCTS_CREATE_ERROR: 'product_create_error',
    CATEGORY_FETCH_SUCCESS: 'category_fetch_success',
    CATEGORY_FETCH_ERROR: 'category_fetch_error'
};
