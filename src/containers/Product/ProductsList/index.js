import PropTypes from 'prop-types'
import ProductList from './ProductList';
import ProductCardInformation from 'components/Product/ProductCardInformation';
import ProgressCircle from 'components/Progress/ProgressCircle';

ProductList.propTypes = {
    Item: PropTypes.func.isRequired,
    Spinner: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
    Item: ProductCardInformation,
    Spinner: ProgressCircle,
};

export default ProductList;