import React from 'react';
import { Button, CardContent, CardHeader, IconButton } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import AuthLogo from './AuthLogo';
import { FormStyles } from '../styles';
import { colors } from '../../assets/styleGuide';
import SuccessMessageStyles from '../styles/SuccessMessageStyles';

const SuccessMessage = () => {
    const classes = { ...FormStyles(), ...SuccessMessageStyles() };
    const history = useHistory();

    return (
        <div className={classes.pageContainer}>
            <div className={classes.container}>
                <div className={classes.card}>
                    <CardHeader className={classes.header} component={AuthLogo} />
                    <CardContent>
                        <IconButton disabled className={classes.iconBackground}>
                            <Check style={{ color: colors.successIcon }} />
                        </IconButton>
                        <div>
                            <h2 className={classes.title}>Password successfully changed </h2>
                            <p className={classes.subTitleContainer}>
                                You may now login using your new password.
                            </p>
                        </div>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            type="submit"
                            className={classes.btn}
                            data-testid="success-message-button"
                            onClick={() => {
                                localStorage.clear();
                                history.push('login');
                            }}>
                            Back to login
                        </Button>
                    </CardContent>
                </div>
            </div>
        </div>
    );
};

export default SuccessMessage;
