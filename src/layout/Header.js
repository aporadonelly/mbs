/* eslint-disable react/no-children-prop */
/**
 * @Name Header
 * @Description Renders App Bar for the MainNavBar Component
 * @Props { drawerToggle } passes the function that toggles the menubar drawer when it is on mobile state
 * @Returns AppBar Component with Logout
 * @Author RJ
 * @pdatedBy RJ
 */
import { AppBar, Button, Drawer, Grid, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainNavBarStyles from '../components/styles/MainNavBarStyles';
import { logout } from '../actions';

const Header = ({ drawerToggle }) => {
    const classes = MainNavBarStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logout());
        history.push('login');
    };

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => drawerToggle()}
                        className={classes.menuButton}>
                        <MenuIcon style={{ color: 'black' }} />
                    </IconButton>
                    <Grid container direction="row" justify="flex-end" alignItems="center">
                        <Button onClick={handleLogout}>Logout</Button>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.sidebar}>
                <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open />
            </div>
        </div>
    );
};

export default Header;
