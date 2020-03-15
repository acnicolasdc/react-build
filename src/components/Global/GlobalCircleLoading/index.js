import PropTypes from 'prop-types'
import GlobalCircleLoading from './GlobalCircleLoading';

GlobalCircleLoading.propTypes = {
    size: PropTypes.number.isRequired,
};

GlobalCircleLoading.defaultProps = {
    size: 75,
};

export default GlobalCircleLoading;