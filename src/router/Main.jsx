import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Main({ routes }) {
    const _handleRoutes = () => {
        return routes.map(({name, RouteComponent}, key) => {
            return (
                <Route exact path={`/${name}`} key={key}>
                    <RouteComponent />
                </Route>
            );
        });
    }
    return (
        <BrowserRouter>
            <Switch>
                {_handleRoutes()}
            </Switch>
        </BrowserRouter>
    )
}
export default Main;
