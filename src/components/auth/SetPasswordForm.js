/**
 * @Name: SetPasswordForm
 * @Description: component for Set Password Form
 * @Props:
 *      onSetPassword: function to trigger set password
 *      onUpdateField: function for updating text fields
 * @Return: View
 * @Author: Frances
 * @Last Update By: Frances
 */
import React, { useRef, useEffect, useState } from 'react';
import { CardHeader, CardContent, Button, InputAdornment, IconButton } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useSelector } from 'react-redux';
import { CheckCircle, Visibility, VisibilityOff } from '@material-ui/icons';
import { FormStyles, SetPasswordFormStyles } from '../styles';
import AuthLogo from './AuthLogo';
import ErrorMessage from '../ErrorMessage';
import CustomErrorMessage from '../CustomErrorMessage';

const SetPasswordForm = ({ onUpdateField, onSetPassword }) => {
    const classes = { ...FormStyles(), ...SetPasswordFormStyles() };
    const auth = useSelector(state => state.auth);
    const formRef = useRef(null);

    const [isFormValid, setIsFormValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const limit = auth.newPassword.length >= 8 && auth.newPassword.length <= 16;
    const hasNumberLowerUpperCase = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(auth.newPassword);
    const hasSpecialChars = /(?=.*[~!@#$%^&*()=_+-])/.test(auth.newPassword);

    useEffect(async () => {
        const formValidity = await formRef.current.isFormValid();
        setIsFormValid(formValidity && limit && hasNumberLowerUpperCase && hasSpecialChars);
    }, [auth.code, auth.newPassword, auth.newPasswordCopy]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const hasError =
        auth.isSetPasswordFormSubmitted && auth.passwordError.code === 'PasswordMismatchError';
    const hasCodeError = auth.isSetPasswordFormSubmitted && auth.codeError.code !== undefined;

    return (
        <div className={classes.pageContainer}>
            <ValidatorForm
                ref={formRef}
                onSubmit={onSetPassword}
                className={classes.container}
                autoComplete="off">
                <div className={classes.card}>
                    <CardHeader className={classes.header} component={AuthLogo} />
                    <CardContent>
                        <div className={classes.fieldContainer}>
                            <div className={classes.label}>Code</div>
                            <TextValidator
                                error={hasCodeError}
                                fullWidth
                                variant="outlined"
                                onChange={onUpdateField}
                                name="code"
                                type="text"
                                placeholder="Enter Code"
                                validators={['required']}
                                errorMessages={[ErrorMessage('Code is required.')]}
                                value={auth.code}
                            />
                            <CustomErrorMessage
                                renderCondition={hasCodeError}
                                message={
                                    auth.codeError.code === 'LimitExceededException'
                                        ? 'Attempt limit exceeded, please try after some time'
                                        : 'Incorrect code. Please try again'
                                }
                            />
                        </div>
                        <div className={classes.fieldContainer}>
                            <div className={classes.label}>New Password</div>
                            <TextValidator
                                error={hasError}
                                fullWidth
                                variant="outlined"
                                onChange={onUpdateField}
                                name="newPassword"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter New Password"
                                validators={['required']}
                                errorMessages={[ErrorMessage('Password is required.')]}
                                value={auth.newPassword}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                className={classes.passwordIcon}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </div>
                        <div className={classes.fieldContainer}>
                            <div className={classes.label}>Confirm New Password</div>
                            <TextValidator
                                required
                                error={hasError}
                                fullWidth
                                variant="outlined"
                                onChange={onUpdateField}
                                name="newPasswordCopy"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Confirm New Password"
                                validators={['required']}
                                errorMessages={[ErrorMessage('Password is required.')]}
                                value={auth.newPasswordCopy}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                className={classes.passwordIcon}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <CustomErrorMessage
                                renderCondition={hasError}
                                message={auth.passwordError.message}
                            />
                        </div>
                        <div className={classes.requirementContainer}>
                            <div className={classes.requirement}>
                                <CheckCircle
                                    className={limit ? classes.activeIcon : classes.icon}
                                    fontSize="small"
                                />
                                Limit: 8 to 16 characters
                            </div>
                            <div className={classes.requirement}>
                                <CheckCircle
                                    className={
                                        hasNumberLowerUpperCase ? classes.activeIcon : classes.icon
                                    }
                                    fontSize="small"
                                />
                                Must contain a number, an uppercase (ABC) and lowercase letter (abc)
                            </div>
                            <div className={classes.requirement}>
                                <CheckCircle
                                    className={hasSpecialChars ? classes.activeIcon : classes.icon}
                                    fontSize="small"
                                />
                                Must contain include special characters: ~!@#$%^&*()_-+
                            </div>
                        </div>
                        <Button
                            disabled={!isFormValid}
                            variant="contained"
                            size="large"
                            color="primary"
                            type="submit"
                            className={classes.btn}
                            classes={{ disabled: classes.disabledBtn }}
                            data-testid="change-password-button">
                            Confirm
                        </Button>
                    </CardContent>
                </div>
            </ValidatorForm>
        </div>
    );
};
export default SetPasswordForm;
