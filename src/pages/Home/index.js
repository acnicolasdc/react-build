//import PropTypes from 'prop-types';
import Home from './Home';
//Routes
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';


export const routes = [
    {
        name: 'account',
        RouteComponent: Account
    },
    {
        name: 'dashboard',
        RouteComponent: Dashboard
    },
];
export default Home;