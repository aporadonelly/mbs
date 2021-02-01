import React from 'react';
import { useHistory, useRouteMatch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuth, login } from '../../actions';
import { userStatus } from '../../reducers/constants';
import { LoginForm } from '../../components';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch();
    const auth = useSelector(state => state.auth);

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

    const renderForgotPasswordForm = () => {
        history.push('forgot-password');
    };
    return (
        <LoginForm
            onLogin={e => handleLogin(e)}
            onUpdateField={e => handleUpdateField(e)}
            onRenderForgotPasswordForm={() => renderForgotPasswordForm()}
        />
    );
};

export default Login;
