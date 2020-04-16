import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SessionContext } from 'providers/session';

function Main({ routes }) {
    const { session } = useContext(SessionContext);

    const handlePathGenerate = (path, pathOwner) => {
        if(pathOwner !== ''){
            if(pathOwner === '/') return `/${path}`
            return `/${pathOwner}/${path}`;
        }
        return `/${path}`;
    }

    const handleRoutes = (localRoute, RouteOwner = null, pathOwner = '') => {
        return localRoute.map(({path, routes, private:loginRequired, RouteComponent}, index) => {
            if(loginRequired && !session)return null;
            if(routes && routes.length > 0) return handleRoutes(routes, RouteComponent, path);
            const fullPath = handlePathGenerate(path, pathOwner);
            return (
                <Switch key={index}>
                    { RouteOwner&& <Route exact path={`/${pathOwner}`}><RouteOwner /></Route>}
                    <Route exact path={`${fullPath}`} >
                        <RouteComponent />
                    </Route>
                </Switch>
            );
        });
    }
    return (
        <BrowserRouter>
            {handleRoutes(routes)}
        </BrowserRouter>
    )
}
export default Main;
