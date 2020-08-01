import PropTypes from 'prop-types';
import ButtonGeneric from './ButtonGeneric';
import CONST from './utils/constants';

ButtonGeneric.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    animation: PropTypes.bool.isRequired,
    disableIcon: PropTypes.bool.isRequired,
    Icon: PropTypes.func.isRequired
};

ButtonGeneric.defaultProps = {
    title: CONST.GENERIC_BUTTON_TITLE,
    animation: false,
    disableIcon: false,
    Icon: () => null,
    onClick: () => {}
};

export const constants = CONST;
export default ButtonGeneric;