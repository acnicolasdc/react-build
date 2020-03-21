import PropTypes from 'prop-types'
import ProductDetail from './ProductDetail';
import ProductCardInformation from 'components/Product/ProductCardInformation';
import ProgressCircle from 'components/Progress/ProgressCircle';

ProductDetail.propTypes = {
    Item: PropTypes.func.isRequired,
    Spinner: PropTypes.func.isRequired,
};

ProductDetail.defaultProps = {
    Item: ProductCardInformation,
    Spinner: ProgressCircle,
};

export default ProductDetail;