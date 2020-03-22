import PropTypes from 'prop-types';
import FormBody from './FormBody';
import ButtonGeneric from '../../Button/ButtonGeneric';

FormBody.propTypes = {
  render: PropTypes.arrayOf(PropTypes.element).isRequired,
  Button: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

FormBody.defaultProps = {
  render: [],
  Button: ButtonGeneric,
  onSubmit: e => {
    e.preventDefault();
  }
};
export default FormBody;
