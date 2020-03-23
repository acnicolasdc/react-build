import PropTypes from 'prop-types'
import ButtonGeneric from './ButtonGeneric';

ButtonGeneric.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

ButtonGeneric.defaultProps = {
    title: 'Click me',
    onClick: () => {}
};

export default ButtonGeneric;