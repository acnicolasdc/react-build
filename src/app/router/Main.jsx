import React, { useContext, useCallback } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SessionContext } from 'providers/session';

const EMPTY_ARRAY = 0;

function Main({ routes }) {
    const { session } = useContext(SessionContext);

    const handlerPathManager = (path, ownerPath = '') => {
        if(ownerPath !== ''){
            if(path === '/' && ownerPath === '/') return '/';
            if(ownerPath === '/') return `/${path}`;
            return `/${ownerPath}/${path}`;
        }
        if(path === '*' || path === '/') return `${path}`;
        return `/${path}`;
    }
    const routerManager = useCallback((arrayRoutes, ownerPath = '') => {
        return arrayRoutes.map(( {path, routes, private: loginRequired, RouteComponent }, index ) => {
            const fullPath = handlerPathManager(path, ownerPath);
            if(loginRequired && !session) return null;
            return (
                <Route path={`${fullPath}`} key={index}>
                    {
                        (routes && routes.length > EMPTY_ARRAY)?(
                            <Switch>
                                {routerManager([...routes, {RouteComponent, path, private: loginRequired}], path)}
                            </Switch>
                        ):( <RouteComponent /> )
                    }
                </Route>
            )
        });
    }, [session]);

    return (
        <BrowserRouter>
            <Switch>
                {routerManager(routes)}
            </Switch>
        </BrowserRouter>
    )
}
export default Main;
