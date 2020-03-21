import PropTypes from 'prop-types'
import ButtonHeart from './ButtonHeart';

ButtonHeart.propTypes = {
    size: PropTypes.number.isRequired,
};

ButtonHeart.defaultProps = {
    size: 100,
}

export default ButtonHeart;