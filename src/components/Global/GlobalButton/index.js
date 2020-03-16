import PropTypes from 'prop-types'
import GlobalButton from './GlobalButton';

GlobalButton.propTypes = {
    title: PropTypes.string.isRequired,
};

GlobalButton.defaultProps = {
    title: 'Click me',
};

export default GlobalButton;