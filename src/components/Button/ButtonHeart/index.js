import PropTypes from 'prop-types';
import { IoIosHeartEmpty , IoIosHeart } from 'react-icons/io';
import ButtonHeart from './ButtonHeart';
import CONST from './utils/constants';

ButtonHeart.propTypes = {
    Icon: PropTypes.func.isRequired,
    IconSelected: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

ButtonHeart.defaultProps = {
    size: CONST.GENERIC_BUTTON_HEART_SIZE,
    isSelected: CONST.GENERIC_BUTTON_HEART_IS_SELECTED,
    onClick: () => {},
    Icon: IoIosHeartEmpty,
    IconSelected: IoIosHeart,
}

export const constants = CONST;
export default ButtonHeart;