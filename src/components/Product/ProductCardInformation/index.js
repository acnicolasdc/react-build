import PropTypes from 'prop-types'
import ProductCardInformation from './ProductCardInformation';
import GlobalHeartButton from '../../Global/GlobalHeartButton';
import GlobalAddToCartButton from '../../Global/GlobalAddToCartButton';
import CONST from './utils/const.js';

ProductCardInformation.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    topButton: PropTypes.element.isRequired,
    footerButton: PropTypes.element.isRequired,
};

ProductCardInformation.defaultProps = {
    image: CONST.GENERIC_PRODUCT_IMAGE,
    name: CONST.GENERIC_PRODUCT_NAME,
    description: CONST.GENERIC_PRODUCT_DESCRIPTION,
    topButton: GlobalHeartButton,
    footerButton: GlobalAddToCartButton,
};

export default ProductCardInformation;