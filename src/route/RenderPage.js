/**
 * @Name RenderPage
 * @Description Gets the final Layout Design and Renders it to App
 * @Props none
 * @Returns The Default Layout of the Routed Page
 * @Author RJ
 * @UpdatedBy RJ
 */

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';
import Users from '../pages/Users';
import { PageManager, Main } from './RouteData';

const RenderPage = () => (
    <Layout data-test="Page_Layout">
        <Switch>
            {Main.map((items, index) => (
                <Route
                    key={index}
                    path={items.path}
                    exact={items.exact}
                    component={items.main}
                    data-test={`MainPage_${items.sidebar}`}
                />
            ))}
            {PageManager.map((items, index) => (
                <Route
                    key={index}
                    path={items.path}
                    exact={items.exact}
                    component={items.main}
                    data-test={`PageManager_Page_${items.sidebar}`}
                />
            ))}
            <Route data-test="ManagePage_Users" path="/users" component={() => <Users />} />
        </Switch>
    </Layout>
);

export default RenderPage;
