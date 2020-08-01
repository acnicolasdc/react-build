//import PropTypes from 'prop-types';
import Home from './Home';
//Routes
import Account from './pages/Account';
import Override from './pages/Override';
import Dashboard from './pages/Dashboard';


export const routes = [
    {
        path: 'account',
        RouteComponent: Account
    },
    {
        path: 'dashboard',
        RouteComponent: Dashboard
    },
    {
        name: 'override',
        RouteComponent: Override
    },
];
export default Home;