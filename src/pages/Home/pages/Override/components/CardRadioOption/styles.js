import styled from 'styled-components';


export const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 80px;
    justify-content: center;
    align-items: center;
    background-color:${props => props.theme.background};
    border-radius: 15px;
    padding: 0;
    :hover {
        box-shadow: ${props => props.theme.insetShadow};
    }
    ${props => props.$isChecked?`
        border: 3px solid ${props.theme.shinyBlue};
        box-shadow: ${props.theme.insetShadow};
    ` :` 
        box-shadow: ${props.theme.squaredShadow};
    ` 
  }
`;
