import PropTypes from 'prop-types'
import ModalPortal from './ModalPortal';

ModalPortal.propTypes = {
    open: PropTypes.bool.isRequired,
};

ModalPortal.defaultProps = {
    open: false,
};

export default ModalPortal;
