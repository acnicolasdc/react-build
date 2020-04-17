import PropTypes from 'prop-types';
import Main from './Main';
// Routes
import NotFound from 'pages/NotFound';
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
            path: 'about',
            private: true,
            RouteComponent: AboutProduct,
        },
        {
            path: '/',
            private: false,
            RouteComponent: Home,
            routes: homeRoutes
        },
        {
            path: '*',
            private: false,
            RouteComponent: NotFound,
        },
    ],
};

export default Main;