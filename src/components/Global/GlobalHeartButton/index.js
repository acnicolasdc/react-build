import PropTypes from 'prop-types'
import GlobalHeartButton from './GlobalHeartButton';

GlobalHeartButton.propTypes = {
    size: PropTypes.number.isRequired,
};

GlobalHeartButton.defaultProps = {
    size: 100,
}

export default GlobalHeartButton;