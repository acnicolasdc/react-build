import React, { useContext, useMemo, useCallback } from 'react';
import Layout from '../components/Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SessionContext } from 'providers/session';

const EMPTY_ARRAY = 0;
const OWNER_ROUTE = '/';
const NOT_FOUND_ROUTE = '*';

function Main({ routes }) {
    const { session } = useContext(SessionContext);

    const handlerPathManager = (path, ownerPath = '') => {
        if(ownerPath !== ''){
            if(path === OWNER_ROUTE && ownerPath === OWNER_ROUTE) return `${path}`;
            if(path ===  ownerPath || ownerPath === OWNER_ROUTE) return `/${path}`;
            return `/${ownerPath}/${path}`;
        }
        if(path === NOT_FOUND_ROUTE || path === OWNER_ROUTE) return `${path}`;
        return `/${path}`;
    }

    const routerManager = useCallback((defaultRoutes = [], ownerPath = '') => {
        // 1. Check if the session is true, true = use only privates routes false = use public routes
        let dynamicRoutes = session?routes.private:routes.public;
        // 2. But this is a recursive function, we need to check if the array defaultRoutes is not empty
        // 3. If the defaultRoutes is not empty we assume that recursive function was called and we assign the new defaultRoutes
        if(defaultRoutes.length > EMPTY_ARRAY) dynamicRoutes = defaultRoutes;
        // 4. Always the first called we use or public or private rotes, but however we are going to read the array
        // - all route is a simple object with 2 fields required ( path, RoutComponent )
        // - the others fields like owner or routes are the optionals fields that you can pass if you want to create SubRoutes (routes)
        // - or if you want to set the component like the "Father's routes"
        const finalRoutes = dynamicRoutes.map(( {path, owner, routes, RouteComponent }, index ) => {
        // 5. Before return any route , we need to check if Route is an Owner
        // - true: If is a owner we need to use the path / it means that its the first route of all the project
        // - false: we assume that its a simple route and use the default path
        const pathToUse = owner?OWNER_ROUTE:path;
        // 6. After that, we need to create the full-path that the component will use
            const fullPath = handlerPathManager(pathToUse, ownerPath);
            return (
                <Route path={`${fullPath}`} key={index}>
                    {
        // 7. Before return the elements we are going to check if the Father component has sub routes
                        (routes && routes.length > EMPTY_ARRAY)?(
        // 8. If the Father component has sub routes, we are going to create a new switch with the sub routes and father component in the same level
        // 9. Call the routerManager to create the routes ( recursive )
                            <Switch>
                                {routerManager([...routes, {RouteComponent, owner, path: pathToUse}], pathToUse)}
                            </Switch>
                        ):( <RouteComponent /> )
                    }
                </Route>
            )
        });
        //return the final Routes
        return finalRoutes;
    },[session, routes]);

    const routerMemo = useMemo(()=>routerManager(), [routerManager]);

    if(session === false) {
        return (
            <BrowserRouter>
                <Switch>
                    {routerMemo}
                </Switch>
            </BrowserRouter>
        )
    }

    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    {routerMemo}
                </Switch>
            </BrowserRouter>
        </Layout>
    )
}
export default Main;
