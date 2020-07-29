import styled from 'styled-components';


export const Root = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.$style}
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  position: relative;
  flex-direction: row;
  .radio_base{
    display: flex;
    align-items: center;
    padding: 5px;
    position: relative;
  }
  ${props => props.$style}
`;

export const RadioButtonHover = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border-radius: 150px;
  background: #E0E5EC;
  box-shadow:  2px 2px 5px #bec3c9, 
             -2px -2px 5px #ffffff;
  outline: none;
  ${props => props.$style}
`;
export const RadioButtonLabel = styled.label`
  color: ${props => props.theme.textColor};
  ${props => props.$style}
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  &:hover ~ ${RadioButtonHover} {
    border-radius: 150px;
    background: linear-gradient(145deg, #caced4, #f0f5fd);
    box-shadow:  2px 2px 5px #bec3c9, 
             -2px -2px 5px #ffffff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: ${props => props.theme.shinyBlue};
    }
  }
  ${props =>
    props.$isChecked &&
    ` 
    &:checked + ${RadioButtonHover} {
      background:${props.theme.shinyBlue};
      border: 1px solid #${props.theme.shinyBlue};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 5px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
  ${props => props.$style}
`;