/**
 * @Name RenderPage
 * @Description Gets the final Layout Design and Renders it to App
 * @Props none
 * @Returns The Default Layout of the Routed Page
 * @Author RJ
 * @UpdatedBy RJ
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from './RouteData';

const RenderAuthPage = () => (
    <Switch>
        {Auth.map(items => (
            <Route
                key={items.id}
                exact={items.exact}
                path={items.path}
                component={items.main}
                data-test={`AuthPage_${items.sidebar}`}
            />
        ))}
        <Redirect from="/" to="/login" />
    </Switch>
);

export default RenderAuthPage;
