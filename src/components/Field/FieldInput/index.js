import PropTypes from 'prop-types'
import FieldInput from './FieldInput';
import CONST from './utils/constants';

FieldInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
};

FieldInput.defaultProps = {
    placeholder: CONST.GENERIC_FIELD_INPUT_PLACEHOLDER,
    name: CONST.GENERIC_FIELD_INPUT_NAME,
    value: CONST.GENERIC_FIELD_INPUT_VALUE,
    onChange: () => console.log('without event')
};
export default FieldInput;