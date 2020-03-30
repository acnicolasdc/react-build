import PropTypes from 'prop-types'
import ButtonGeneric from './ButtonGeneric';
import CONST from './utils/constants';

ButtonGeneric.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

ButtonGeneric.defaultProps = {
    title: CONST.GENERIC_BUTTON_TITLE,
    onClick: () => {}
};

export default ButtonGeneric;