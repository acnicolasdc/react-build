import PropTypes from 'prop-types';
import FormVertical from './FormVertical';
import ButtonGeneric from 'components/Button/ButtonGeneric';
import FieldInput from 'components/Field/FieldInput';
import FieldTextArea from 'components/Field/FieldTextArea';
import CONST from './utils/constants';

FormVertical.propTypes = {
  render: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSubmit: PropTypes.func.isRequired
};

FormVertical.defaultProps = {
  render: CONST.GENERIC_FORM_VERTICAL_RENDER,
  onSubmit: ()=>{}
};

FormVertical.Button = ButtonGeneric;
FormVertical.Input = FieldInput;
FormVertical.TextArea = FieldTextArea;

export const constants = CONST;
export default FormVertical;
