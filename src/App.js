import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userStatus } from './reducers/constants';
// import logo from './logo.svg';
import './App.css';
import { verifyAuth, login, logout, updateAuth } from './actions';
import LoginForm from './components';

const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(verifyAuth());
    }, []);

    const handleUpdateField = event => {
        dispatch(updateAuth(event.target.name, event.target.value));
    };

    const handleLogin = () => {
        dispatch(login(auth.username, auth.password));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    if (auth.status !== userStatus.LOGGED_IN) {
        return (
            <LoginForm onLogin={() => handleLogin()} onUpdateField={e => handleUpdateField(e)} />
        );
    }

    return (
        <div>
            Main page
            <button type="button" onClick={handleLogout}>
                logout
            </button>
        </div>
    );
};

export default App;
