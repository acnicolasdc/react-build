import PropTypes from 'prop-types'
import ProductList from './ProductList';
import ProductCardInformation from '../../../components/Product/ProductCardInformation';
import GlobalCircleLoading from '../../../components/Global/GlobalCircleLoading';

ProductList.propTypes = {
    Item: PropTypes.func.isRequired,
    Spinner: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
    Item: ProductCardInformation,
    Spinner: GlobalCircleLoading,
};

export default ProductList;