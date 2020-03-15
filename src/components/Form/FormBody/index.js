import PropTypes from 'prop-types'
import FormBody from './FormBody';

FormBody.propTypes = {
    inputs: PropTypes.arrayOf(PropTypes.element).isRequired,
};

FormBody.defaultProps = {
    inputs: [],
};
export default FormBody;