import React from 'react';
import { TextField, CardContent, CardActions, CardHeader, Button } from '@material-ui/core';
import LoginFormStyles from './styles/LoginFormStyles';

const LoginForm = ({ onLogin, onUpdateField }) => {
    const classes = LoginFormStyles();

    return (
        <div className={classes.pageContainer}>
            <form
                data-testid="login-form"
                className={classes.container}
                noValidate
                autoComplete="off"
                // onSubmit={onLogin}
            >
                <div className={classes.card}>
                    <CardHeader className={classes.header} title="YCS Admin" />
                    <CardContent>
                        <div>
                            <TextField
                                // error={props.isError}
                                fullWidth
                                inputProps={{
                                    'data-testid': 'username'
                                }}
                                id="username"
                                type="username"
                                label="Username"
                                placeholder="Username"
                                margin="normal"
                                name="username"
                                onChange={onUpdateField}
                            />
                            <TextField
                                // error={props.isError}
                                fullWidth
                                inputProps={{
                                    'data-testid': 'password'
                                }}
                                id="password"
                                type="password"
                                label="Password"
                                placeholder="Password"
                                margin="normal"
                                name="password"
                                // helperText={props.isError ? props.helperText : ''}
                                onChange={onUpdateField}
                            />
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            className={classes.loginBtn}
                            data-testid="login-button"
                            onClick={onLogin}
                            // disabled={props.isButtonDisabled}
                        >
                            Login
                        </Button>
                    </CardActions>
                    <div className={classes.subText}>
                        Forgot Password?
                        {/* TODO: change <span> to <a> when Forgot Password is implemented */}
                        <span className={classes.linkText}> Click Here </span>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;
