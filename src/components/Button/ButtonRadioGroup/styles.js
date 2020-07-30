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

export const RadioButtonLabel = styled.label`
  color: ${props => props.theme.textColor};
  ${props => props.$style}
`;

export const RadioButton = styled.div`
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  border: 2px solid ${props => props.theme.shinyBlue};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  transition: all 0.1s linear;
  background: #E0E5EC;
  ${props =>
    props.$isChecked?`
      background: linear-gradient(145deg, #caced4, #f0f5fd);
      box-shadow:  2px 2px 5px #bec3c9, 
              -2px -2px 5px #ffffff;
      &::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${props.theme.shinyBlue};
        transition: all 0.1s linear;
    ` :` 
        border: 3px solid #caced4;
        box-shadow:  2px 2px 5px #bec3c9, 
              -2px -2px 5px #ffffff;
    ` 
  }
`;