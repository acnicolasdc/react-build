import PropTypes from 'prop-types'
import ModalSimple from './ModalSimple';
import ButtonGeneric from '../../Button/ButtonGeneric';
import { IoIosContrast } from 'react-icons/io';

ModalSimple.propTypes = {
    Icon: PropTypes.func.isRequired,
    Button: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iconSize: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
};

ModalSimple.defaultProps = {
    Icon: IoIosContrast,
    Button: ButtonGeneric,
    onClick: () => {},
    title: 'Title',
    buttonTitle: 'Close',
    text: 'Lorem....',
    iconSize: 50,
    open: false,
};

export default ModalSimple;