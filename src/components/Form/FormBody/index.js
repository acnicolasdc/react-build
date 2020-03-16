import PropTypes from 'prop-types'
import FormBody from './FormBody';
import GlobalButton from '../../Global/GlobalButton';

FormBody.propTypes = {
    render: PropTypes.arrayOf(PropTypes.element).isRequired,
    Button: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
};

FormBody.defaultProps = {
    render: [],
    Button: GlobalButton,
    onSend: () => console.log('Without function'),
};
export default FormBody;