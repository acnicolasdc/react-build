import PropTypes from 'prop-types'
import FieldTextArea from './FieldTextArea';
import CONST from './utils/constants';

FieldTextArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
};

FieldTextArea.defaultProps = {
    placeholder: CONST.GENERIC_FIELD_TEXTAREA_PLACEHOLDER,
    name: CONST.GENERIC_FIELD_TEXTAREA_NAME,
    value: CONST.GENERIC_FIELD_TEXTAREA_VALUE,
    onChange: () => console.log('without event')
};

export const constants = CONST;
export default FieldTextArea;