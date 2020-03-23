import PropTypes from 'prop-types'
import ProductList from './ProductList';
import ProductCardInformationActions from '../ProductCardInformationActions';
import ProgressCircle from 'components/Progress/ProgressCircle';

ProductList.propTypes = {
    Item: PropTypes.func.isRequired,
    Spinner: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
    Item: ProductCardInformationActions,
    Spinner: ProgressCircle,
};

export default ProductList;