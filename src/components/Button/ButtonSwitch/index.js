import PropTypes from 'prop-types'
import { IoMdMoon , IoMdSunny } from 'react-icons/io';
import ButtonSwitch from './ButtonSwitch';

ButtonSwitch.propTypes = {
    IconLeft: PropTypes.func.isRequired,
    IconRight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    isSwitch: PropTypes.bool.isRequired
};

ButtonSwitch.defaultProps = {
    IconLeft: IoMdMoon,
    IconRight: IoMdSunny,
    isSwitch: false,
    onClick: () => console.log('Without onClick function'),
};

export default ButtonSwitch;