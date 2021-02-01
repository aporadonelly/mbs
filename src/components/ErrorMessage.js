import React from 'react';
import { Info } from '@material-ui/icons';
import { FormStyles } from './styles';

const ErrorMessage = message => {
    const classes = FormStyles();
    return (
        <span className={classes.errorContainer}>
            <Info color="error" style={{ marginRight: '0.25em' }} fontSize="small" /> {message}
        </span>
    );
};

export default ErrorMessage;
