/**
 * @Name Header
 * @Description Renders App Bar for the MainNavBar Component
 * @Props drawerToggle: passes the function that toggles the menubar drawer when it is on mobile state
 * @Returns AppBar Component with Logout
 * @Author RJ
 * @UpdatedBy RJ
 */
import { AppBar, Avatar, Grid, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ArrowDownIcon from '@material-ui/icons/ExpandMoreOutlined';
import MainNavBarStyles from './styles/LayoutStyles';
import { logout, verifyAuth } from '../actions';

const Header = ({ drawerToggle }) => {
    const classes = MainNavBarStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(verifyAuth());
    }, []);

    const UserDetails = {
        firstName: auth.user.firstName,
        lastName: auth.user.lastName,
        role: auth.user.role
    };

    const Initials = UserDetails.firstName.slice(0, 1) + UserDetails.lastName.slice(0, 1);

    const handleLogout = () => {
        dispatch(logout());
        history.push('login');
    };

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar
                elevation={0}
                color="inherit"
                position="fixed"
                className={classes.appBar}
                data-test="Header_AppBar_Component">
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
                        <Avatar className={classes.avatar}>{Initials}</Avatar>
                        <p>
                            {UserDetails.firstName} {UserDetails.lastName}
                            <br />
                            <span style={{ fontWeight: 'bold' }}>{UserDetails.role}</span>
                        </p>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit">
                            <ArrowDownIcon />
                        </IconButton>
                        <Menu
                            elevation={0}
                            style={{
                                marginTop: '3rem',
                                width: '20rem'
                            }}
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={open}
                            onClose={handleClose}>
                            <div className={classes.menuItemGroup}>
                                <MenuItem
                                    style={{
                                        backgroundColor: 'transparent',
                                        fontFamily: 'Inter Regular'
                                    }}
                                    onClick={handleClose}>
                                    Change Password
                                </MenuItem>
                                <MenuItem className={classes.menuItemLogout} onClick={handleLogout}>
                                    Logout
                                </MenuItem>
                            </div>
                        </Menu>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
