import PropTypes from 'prop-types'
import ProductCardInformation from './ProductCardInformation';
import CONST from './utils/const.js';

ProductCardInformation.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

ProductCardInformation.defaultProps = {
    image: CONST.GENERIC_PRODUCT_IMAGE,
    name: CONST.GENERIC_PRODUCT_NAME,
    description: CONST.GENERIC_PRODUCT_DESCRIPTION
};

export default ProductCardInformation;