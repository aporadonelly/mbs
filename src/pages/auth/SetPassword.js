import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetPasswordForm, SuccessMessage } from '../../components';
import { verifyForgotPassword, updateAuth, setNewPassword } from '../../actions';
import { userStatus } from '../../reducers/constants';

const SetPassword = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const handleUpdateField = event => {
        dispatch(updateAuth('isSetPasswordFormSubmitted', false));
        dispatch(updateAuth('passwordError', {}));
        dispatch(updateAuth('codeError', {}));
        dispatch(updateAuth(event.target.name, event.target.value));
    };

    const handleSetPassword = () => {
        if (auth.newPassword === auth.newPasswordCopy) {
            dispatch(updateAuth('isSetPasswordFormSubmitted', true));
            const email = auth.username ? auth.username : localStorage.getItem('email');
            dispatch(verifyForgotPassword(email, auth.code, auth.newPassword));
        } else {
            dispatch(updateAuth('isSetPasswordFormSubmitted', true));
            dispatch(
                updateAuth('passwordError', {
                    code: 'PasswordMismatchError',
                    message: 'Password does not match. Please try again.'
                })
            );
        }
    };

    const handleSetNewPassword = () => {
        if (auth.newPassword === auth.newPasswordCopy) {
            dispatch(updateAuth('isSetPasswordFormSubmitted', true));
            dispatch(setNewPassword(auth.userInfo, auth.newPassword));
        } else {
            dispatch(updateAuth('isSetPasswordFormSubmitted', true));
            dispatch(
                updateAuth('passwordError', {
                    code: 'PasswordMismatchError',
                    message: 'Password does not match. Please try again.'
                })
            );
        }
    };

    if (auth.isSetPasswordSuccess) {
        return <SuccessMessage />;
    }
    if (auth.status === userStatus.PASSWORD_CHANGE_NEEDED) {
        return (
            <SetPasswordForm
                onUpdateField={e => handleUpdateField(e)}
                onSetPassword={() => handleSetNewPassword()}
                hasNoCode
            />
        );
    }

    return (
        <SetPasswordForm
            onUpdateField={e => handleUpdateField(e)}
            onSetPassword={() => handleSetPassword()}
        />
    );
};

export default SetPassword;
