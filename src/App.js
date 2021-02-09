import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { userStatus } from './reducers/constants';
import { verifyAuth, getCategory } from './actions';
import RenderPage from './route/RenderPage';
import RenderAuthPage from './route/RenderAuthPage';

const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(verifyAuth());
        dispatch(getCategory());
    }, []);

    if (auth.status !== userStatus.LOGGED_IN) {
        return (
            <BrowserRouter>
                <RenderAuthPage data-testid="login-page" />
            </BrowserRouter>
        );
    }
    return (
        <BrowserRouter>
            <RenderPage data-test="App" />
        </BrowserRouter>
    );
};

export default App;
