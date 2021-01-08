//import PropTypes from 'prop-types';
import Home from './Home';
//Routes
import Account from './pages/Account';
import Override from './pages/Override';
import Dashboard from './pages/Dashboard';
import Teleportation from './pages/Teleportation';


export const routes = [
    {
        name: 'account',
        RouteComponent: Account
    },
    {
        name: 'dashboard',
        RouteComponent: Dashboard
    },
    {
        name: 'override',
        RouteComponent: Override
    },
    {
        name: 'teleport',
        RouteComponent: Teleportation
    },
];
export default Home;