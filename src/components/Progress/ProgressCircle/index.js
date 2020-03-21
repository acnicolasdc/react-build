import PropTypes from 'prop-types'
import ProgressCircle from './ProgressCircle';

ProgressCircle.propTypes = {
    size: PropTypes.number.isRequired,
};

ProgressCircle.defaultProps = {
    size: 75,
};

export default ProgressCircle;