import PropTypes from 'prop-types';
import Main from './Main';
// Routes
import AboutProduct from 'pages/AboutProduct';
import Home, { routes as homeRoutes } from 'pages/Home';

Main.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        RouteComponent: PropTypes.func.isRequired,
        private: PropTypes.bool.isRequired,
        routes: PropTypes.array,
    })).isRequired,
};

Main.defaultProps = {
    routes: [
        {
            path: '/',
            private: true,
            RouteComponent: Home,
            //routes: homeRoutes
        },
        {
            path: 'about',
            private: false,
            RouteComponent: AboutProduct,
            routes: homeRoutes
        },
    ],
};

export default Main;