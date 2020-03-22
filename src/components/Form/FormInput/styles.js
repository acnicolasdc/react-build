import styled from 'styled-components';

export const Input =  styled.input`
    position: relative;
    width: 100%;
    height: 30px;
    border-radius: 25px;
    border:none;
    outline: none;
    background-color:${props => props.theme.secondBackground};
    box-shadow: ${props => props.theme.insetShadow};
    padding: 0px 20px;
    font-size: 1rem;
    color: ${props => props.theme.textColor};;
    ::placeholder {
        color: ${props => props.theme.placeholderColor};;
    }
`;