import PropTypes from 'prop-types'
import ProductCardInformation from './ProductCardInformation';
import ButtonHeart from '../../Button/ButtonHeart';
import ButtonGeneric from '../../Button/ButtonGeneric';
import CONST from './utils/constants';

ProductCardInformation.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    TopButton: PropTypes.func.isRequired,
    FooterButton: PropTypes.func.isRequired,
    disabledFooterButton: PropTypes.bool.isRequired,
    disabledTopButton: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

ProductCardInformation.defaultProps = {
    image: CONST.GENERIC_PRODUCT_IMAGE,
    name: CONST.GENERIC_PRODUCT_NAME,
    description: CONST.GENERIC_PRODUCT_DESCRIPTION,
    disabledFooterButton: CONST.GENERIC_PRODUCT_DISABLED_FOOTER_BUTTON,
    disabledTopButton: CONST.GENERIC_PRODUCT_DISABLED_TOP_BUTTON,
    TopButton: () => null,
    FooterButton: () => null,
    onClick: () => {},
};

ProductCardInformation.FooterButton = ButtonGeneric;
ProductCardInformation.TopButton = ButtonHeart;

export const constants = CONST;
export default ProductCardInformation;