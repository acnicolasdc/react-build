import PropTypes from 'prop-types'
import ButtonGeneric from './ButtonGeneric';

ButtonGeneric.propTypes = {
    title: PropTypes.string.isRequired,
};

ButtonGeneric.defaultProps = {
    title: 'Click me',
};

export default ButtonGeneric;