import PropTypes from 'prop-types'
import { IoIosContrast } from 'react-icons/io';
import ButtonToggle from './ButtonToggle';
import CONST from './utils/constants';

ButtonToggle.propTypes = {
    Icon: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    isToggle: PropTypes.bool.isRequired
};

ButtonToggle.defaultProps = {
    Icon: IoIosContrast,
    isToggle: CONST.GENERIC_BUTTON_TOGGLE_IS_TOGGLED,
    onClick: () => console.log('Without onClick function'),
};

export default ButtonToggle;