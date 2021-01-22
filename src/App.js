import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch, Redirect, BrowserRouter } from 'react-router-dom';
import { userStatus } from './reducers/constants';
import { verifyAuth, login, updateAuth } from './actions';
import LoginForm from './components';
import RenderPage from './route/RenderPage';

const App = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(verifyAuth());
    }, []);

    const handleUpdateField = event => {
        dispatch(updateAuth('isFormSubmitted', false));
        dispatch(updateAuth('isAuthInvalid', false));
        dispatch(updateAuth(event.target.name, event.target.value));
    };

    const handleLogin = e => {
        e.preventDefault();
        dispatch(updateAuth('isFormSubmitted', true));
        if (auth.username !== '' && auth.password !== '') {
            dispatch(login(auth.username, auth.password));
            const path = match.path || { from: { pathname: '/' } };
            if (auth.status !== userStatus.LOGGED_IN) {
                history.push(path);
                return <Redirect to={path} from="/login" />;
            }
        }
    };

    if (auth.status !== userStatus.LOGGED_IN) {
        return (
            <LoginForm onLogin={e => handleLogin(e)} onUpdateField={e => handleUpdateField(e)} />
        );
    }

    return (
        <BrowserRouter>
            <RenderPage data-test="App" />
        </BrowserRouter>
    );
};

export default App;
