import PropTypes from 'prop-types';
import { IoIosHeartEmpty , IoIosHeart } from 'react-icons/io';
import ButtonHeart from './ButtonHeart';

ButtonHeart.propTypes = {
    Icon: PropTypes.func.isRequired,
    IconSelected: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

ButtonHeart.defaultProps = {
    size: 50,
    isSelected: false,
    onClick: () => {},
    Icon: IoIosHeartEmpty,
    IconSelected: IoIosHeart,
}

export default ButtonHeart;