import PropTypes from 'prop-types';
import Main from './Main';
// Routes
import NotFound from 'pages/NotFound';
import AboutProduct from 'pages/AboutProduct';
import Login from 'pages/Login';
import Home, { routes as homeRoutes } from 'pages/Home';

Main.propTypes = {
    routes: PropTypes.shape({
        private: PropTypes.arrayOf(PropTypes.shape({
            path: PropTypes.string.isRequired,
            RouteComponent: PropTypes.func.isRequired,
            private: PropTypes.bool,
            routes: PropTypes.array,
        })).isRequired,
        public: PropTypes.arrayOf(PropTypes.shape({
            path: PropTypes.string.isRequired,
            RouteComponent: PropTypes.func.isRequired,
            private: PropTypes.bool,
            routes: PropTypes.array,
        })).isRequired,
    }),
};

Main.defaultProps = {
    routes: {
        private:[
                {
                    path: 'about',
                    RouteComponent: AboutProduct,
                },
                {
                    path: 'home',
                    owner: true,
                    RouteComponent: Home, // must be an unique React Component, if you assign the same component the route shouldn't work fine
                    routes: homeRoutes
                },
                {
                    path: '*',
                    RouteComponent: NotFound,
                },
        ],
        public:[
            {
                path: 'login',
                RouteComponent: Login,
                owner: true,
            },
        ]
},
};

export default Main;