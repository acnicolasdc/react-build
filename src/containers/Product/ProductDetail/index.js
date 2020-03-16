import PropTypes from 'prop-types'
import ProductDetail from './ProductDetail';
import ProductCardInformation from 'components/Product/ProductCardInformation';
import GlobalCircleLoading from 'components/Global/GlobalCircleLoading';

ProductDetail.propTypes = {
    Item: PropTypes.func.isRequired,
    Spinner: PropTypes.func.isRequired,
};

ProductDetail.defaultProps = {
    Item: ProductCardInformation,
    Spinner: GlobalCircleLoading,
};

export default ProductDetail;