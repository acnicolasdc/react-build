import styled from 'styled-components';
import { rotation } from 'assets/animations';

export const ButtonGenericContainer =  styled.button`
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    border-radius:100px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 30px;
    text-align:center;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    :hover {
        box-shadow: ${props => props.theme.insetShadow};
    }
    p {
        font-size: 1rem;
        color: ${props => props.theme.textColor};
    }
    .button_icon{
        color: ${props => props.theme.textColor};
        margin-left: 7px;
        height: 20px;
        width: 20px;
    }
    .-animation {
        animation: ${rotation} 0.5s infinite linear;
    }

`;