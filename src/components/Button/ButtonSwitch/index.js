import PropTypes from 'prop-types'
import { IoMdMoon , IoMdSunny } from 'react-icons/io';
import ButtonSwitch from './ButtonSwitch';
import CONST from './utils/constants';


ButtonSwitch.propTypes = {
    IconLeft: PropTypes.func.isRequired,
    IconRight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    isSwitch: PropTypes.bool.isRequired
};

ButtonSwitch.defaultProps = {
    IconLeft: IoMdMoon,
    IconRight: IoMdSunny,
    isSwitch: CONST.GENERIC_BUTTON_SWITCH_IS_SWITCHED,
    onClick: () => console.log('Without onClick function'),
};

export const constants = CONST;
export default ButtonSwitch;