/**
 * @Name: LoginForm
 * @Description: component for login form
 * @Props:
 *      onLogin: function when login button is clicked
 *      onUpdateField: function for updating text fields
 * @Return: View
 * @Author: Frances
 * @Last Update By: Frances
 */
import React from 'react';
import { CardContent, CardHeader, Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Info } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { LoginFormStyles, FormStyles } from './styles';

const LoginForm = ({ onLogin, onUpdateField }) => {
    const classes = { ...FormStyles(), ...LoginFormStyles() };
    const auth = useSelector(state => state.auth);
    const hasError = auth.isFormSubmitted && auth.isAuthInvalid;

    const renderLogo = () => (
        <img
            alt="cms-logo"
            src={require('../assets/images/cms_logo.png').default}
            className={classes.logo}
        />
    );

    const renderErrorMessage = message => (
        <span className={classes.errorContainer}>
            <Info color="error" style={{ marginRight: '0.25em' }} fontSize="small" /> {message}
        </span>
    );

    return (
        <div className={classes.pageContainer}>
            <ValidatorForm onSubmit={onLogin} className={classes.container} autoComplete="off">
                <div className={classes.card}>
                    <CardHeader className={classes.header} component={renderLogo} />
                    <CardContent>
                        <div className={classes.fieldContainer}>
                            <div className={classes.label}>Email</div>
                            <TextValidator
                                error={hasError}
                                fullWidth
                                variant="outlined"
                                onChange={onUpdateField}
                                name="username"
                                type="text"
                                placeholder="Enter Email Address"
                                validators={['required', 'isEmail']}
                                errorMessages={[
                                    renderErrorMessage('Email Address is required.'),
                                    renderErrorMessage('Invalid Email Address format.')
                                ]}
                                value={auth.username}
                            />
                        </div>
                        <div className={classes.fieldContainer}>
                            <div className={classes.label}>Password</div>
                            <TextValidator
                                error={hasError}
                                fullWidth
                                variant="outlined"
                                onChange={onUpdateField}
                                name="password"
                                type="password"
                                placeholder="Enter your Password"
                                validators={['required']}
                                errorMessages={[renderErrorMessage('Password is required.')]}
                                value={auth.password}
                            />
                            {auth.isFormSubmitted && auth.isAuthInvalid ? (
                                // Display error from aws amplify
                                <div className={classes.customErrorContainer}>
                                    <Info
                                        color="error"
                                        style={{ marginRight: '0.25em' }}
                                        fontSize="small"
                                    />
                                    {auth.error.code === 'NotAuthorizedException' ||
                                    auth.error.code === 'UserNotFoundException'
                                        ? 'Invalid email address and/or password.'
                                        : auth.error.message}
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            type="submit"
                            className={classes.loginBtn}
                            data-testid="login-button">
                            Login
                        </Button>
                    </CardContent>
                    <div className={classes.subText}>
                        Forgot Password?
                        {/* TODO: change <span> to <a> when Forgot Password is implemented */}
                        <span className={classes.linkText}> Click Here </span>
                    </div>
                </div>
            </ValidatorForm>
        </div>
    );
};
export default LoginForm;
