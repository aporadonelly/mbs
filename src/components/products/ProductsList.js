import React from 'react';
import { Grid, List, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        display: 'inline-block'
    },
    item: {
        padding: '10px',
        float: 'left'
    }
}));

const Homepage = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} className={classes.root}>
            <List style={{ display: 'flex', flexDirection: 'row' }}>
                <ListItemText className={classes.item}>Loans</ListItemText>
                <ListItemText className={classes.item}>Savings/Checking</ListItemText>
                <ListItemText className={classes.item}>Time Deposit</ListItemText>
            </List>
        </Grid>
    );
};

export default Homepage;
