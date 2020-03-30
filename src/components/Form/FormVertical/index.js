import PropTypes from 'prop-types';
import FormVertical from './FormVertical';
import ButtonGeneric from 'components/Button/ButtonGeneric';
import FieldInput from 'components/Field/FieldInput';
import FieldTextArea from 'components/Field/FieldTextArea';

FormVertical.propTypes = {
  render: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSubmit: PropTypes.func.isRequired
};

FormVertical.defaultProps = {
  render: [],
  onSubmit: ()=>{}
};

FormVertical.Button = ButtonGeneric;
FormVertical.Input = FieldInput;
FormVertical.TextArea = FieldTextArea;
export default FormVertical;
