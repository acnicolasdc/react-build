import PropTypes from 'prop-types'
import ModalSimple from './ModalSimple';
import ButtonGeneric from '../../Button/ButtonGeneric';
import { IoIosContrast } from 'react-icons/io';
import CONST from './utils/constants';

ModalSimple.propTypes = {
    Icon: PropTypes.func.isRequired,
    Button: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iconSize: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
};

ModalSimple.defaultProps = {
    Icon: IoIosContrast,
    Button: ()=> null,
    title: CONST.GENERIC_MODAL_SIMPLE_TITLE,
    buttonTitle: CONST.GENERIC_MODAL_SIMPLE_BUTTON_TITLE,
    text: CONST.GENERIC_MODAL_SIMPLE_TEXT,
    iconSize: CONST.GENERIC_MODAL_SIMPLE_ICON_SIZE,
    open: CONST.GENERIC_MODAL_SIMPLE_OPEN,
};

ModalSimple.Button = ButtonGeneric;

export const constants = CONST;
export default ModalSimple;