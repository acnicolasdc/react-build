import PropTypes from 'prop-types'
import ProductCardInformationActions from './ProductCardInformationActions';
import ProductCardInformation from 'components/Product/ProductCardInformation';

ProductCardInformationActions.propTypes = {
    Item: PropTypes.func.isRequired,
};

ProductCardInformationActions.defaultProps = {
    Item: ProductCardInformation,
};

export default ProductCardInformationActions;
