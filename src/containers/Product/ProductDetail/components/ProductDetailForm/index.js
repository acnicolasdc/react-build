import PropTypes from 'prop-types'
import ProductDetailForm from './ProductDetailForm';
import FormBody from 'components/Form/FormBody';
import FormInput from 'components/Form/FormInput';
import FormTextArea from 'components/Form/FormTextArea';
import GlobalButton from 'components/Global/GlobalButton';

ProductDetailForm.propTypes = {
    Form: PropTypes.func.isRequired,
    Input: PropTypes.func.isRequired,
    TextArea: PropTypes.func.isRequired,
    Button: PropTypes.func.isRequired,
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    onChangeInput: PropTypes.func.isRequired,
};

ProductDetailForm.defaultProps = {
    Form: FormBody,
    Input: FormInput,
    TextArea: FormTextArea,
    Button: GlobalButton,
    product: { name: '', description: '' },
    onChangeInput: () => console.log('Without onChangeInput'),
};

export default ProductDetailForm;