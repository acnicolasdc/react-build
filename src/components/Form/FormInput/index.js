import PropTypes from 'prop-types'
import FormInput from './FormInput';

FormInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
};

FormInput.defaultProps = {
    placeholder:'Placeholder',
    name: 'inputName',
    value: '',
    onChange: () => console.log('without event')
};
export default FormInput;