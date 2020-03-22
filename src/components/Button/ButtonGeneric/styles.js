import styled from 'styled-components';

export const ButtonGenericContainer =  styled.button`
    position: relative;
    border: none;
    outline: none;
    border-radius:100px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 15px;
    text-align:center;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    :hover {
        box-shadow: ${props => props.theme.insetShadow};
    }
    p {
        font-size: 1rem;
        color: ${props => props.theme.textColor};
        padding: 0px 20px;
    }

`;