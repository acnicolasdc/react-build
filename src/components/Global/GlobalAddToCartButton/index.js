import PropTypes from 'prop-types'
import GlobalAddToCartButton from './GlobalAddToCartButton';

GlobalAddToCartButton.propTypes = {
    title: PropTypes.string.isRequired,
};

GlobalAddToCartButton.defaultProps = {
    title: 'Add to Cart',
};

export default GlobalAddToCartButton;