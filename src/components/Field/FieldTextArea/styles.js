import styled from 'styled-components';

export const TextArea =  styled.textarea`
    position: relative;
    width: 100%;
    min-height: 100px;
    border-radius: 20px;
    border:none;
    outline: none;
    background-color:${props => props.theme.secondBackground};
    box-shadow: ${props => props.theme.insetShadow};
    padding: 10px 20px;
    font-size: 1rem;
    color: ${props => props.theme.textColor};
    ::placeholder {
        color: ${props => props.theme.placeholderColor};
    }
`;