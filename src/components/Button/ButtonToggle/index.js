import PropTypes from 'prop-types'
import { IoIosContrast } from 'react-icons/io';
import ButtonToggle from './ButtonToggle';

ButtonToggle.propTypes = {
    Icon: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    isToggle: PropTypes.bool.isRequired
};

ButtonToggle.defaultProps = {
    Icon: IoIosContrast,
    isToggle: false,
    onClick: () => console.log('Without onClick function'),
};

export default ButtonToggle;