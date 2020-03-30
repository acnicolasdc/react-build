import PropTypes from 'prop-types'
import ProgressCircle from './ProgressCircle';
import CONST from './utils/constants';

ProgressCircle.propTypes = {
    size: PropTypes.number.isRequired,
};

ProgressCircle.defaultProps = {
    size: CONST.GENERIC_PROGRESS_CIRCLE_SIZE,
};

export default ProgressCircle;