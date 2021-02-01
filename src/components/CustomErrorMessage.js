import { Info } from '@material-ui/icons';
import React from 'react';
import { FormStyles } from './styles';

const CustomErrorMessage = ({ renderCondition, message }) => {
    const classes = FormStyles();
    return renderCondition ? (
        <div className={classes.customErrorContainer}>
            <Info color="error" style={{ marginRight: '0.25em' }} fontSize="small" />
            {message}
        </div>
    ) : (
        ''
    );
};

export default CustomErrorMessage;
