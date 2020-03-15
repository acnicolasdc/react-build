import PropTypes from 'prop-types'
import FormTextArea from './FormTextArea';

FormTextArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
};

FormTextArea.defaultProps = {
    placeholder:'Placeholder',
    name: 'inputName',
    value: '',
    onChange: () => console.log('without event')
};
export default FormTextArea;