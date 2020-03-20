import PropTypes from 'prop-types';
import Main from './Main';
// Routes
import AboutProduct from 'pages/AboutProduct';
import Home, { routes as homeRoutes } from 'pages/Home';

Main.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        RouteComponent: PropTypes.func.isRequired,
    })).isRequired,
};

Main.defaultProps = {
    routes: [
        {
            name: '',
            RouteComponent: Home
        },
        {
            name: 'about',
            RouteComponent: AboutProduct
        },
        ...homeRoutes
    ],
};

export default Main;