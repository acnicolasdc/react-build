import React, { useContext, useCallback, Profiler } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SessionContext } from 'providers/session';

const EMPTY_ARRAY = 0;

function Main({ routes }) {
    const { session } = useContext(SessionContext);

    const handlerPathManager = (path, ownerPath = '') => {
        if(ownerPath !== ''){
            if(path === '/' && ownerPath === '/') return '/';
            if(path ===  ownerPath) return `/${path}`;
            if(ownerPath === '/') return `/${path}`;
            return `/${ownerPath}/${path}`;
        }
        if(path === '*' || path === '/') return `${path}`;
        return `/${path}`;
    }

    const routerManager = useCallback((arrayRoutes = [], ownerPath = '') => {
        let dynamicRoutes = session?routes.private:routes.public;
        if(arrayRoutes.length > EMPTY_ARRAY) dynamicRoutes = arrayRoutes;
        const finalRoutes =  dynamicRoutes.map(( {path, owner, routes, private: loginRequired, RouteComponent }, index ) => {
            const pathToUse = owner?'/':path;
            const fullPath = handlerPathManager(pathToUse, ownerPath);
            return (
                <Route path={`${fullPath}`} key={index}>
                    {
                        (routes && routes.length > EMPTY_ARRAY)?(
                            <Switch>
                                {routerManager([...routes, {RouteComponent, owner, path: pathToUse, private: loginRequired}], pathToUse)}
                            </Switch>
                        ):( <RouteComponent /> )
                    }
                </Route>
            )
        });
        return finalRoutes;
    }, [session, routes]);
    function onRenderCallback(
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
      ) {
        // Aggregate or log render timings...
        console.log(id)
        console.log(phase)
        console.log(actualDuration)
        // console.log(baseDuration)
        // console.log(startTime)
        // console.log(commitTime)
        // console.log(interactions)
      }
    return (
        <Profiler id="Navigation" onRender={onRenderCallback}>
        <BrowserRouter>
            <Switch>
                {routerManager()}
            </Switch>
        </BrowserRouter>
        </Profiler>
    )
}
export default React.memo(Main);
