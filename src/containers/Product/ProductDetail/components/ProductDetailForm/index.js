import PropTypes from 'prop-types'
import ProductDetailForm from './ProductDetailForm';

ProductDetailForm.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    onChangeInput: PropTypes.func.isRequired,
};

ProductDetailForm.defaultProps = {
    product: { name: '', description: '' },
    onChangeInput: () => console.log('Without onChangeInput'),
};

export default ProductDetailForm;