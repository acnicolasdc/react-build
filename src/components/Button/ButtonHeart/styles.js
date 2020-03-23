import styled from 'styled-components';
import { scale, fadeIn } from 'assets/animations';

export const ButtonHeartContainer =  styled.button`
    position: relative;
    border: none;
    border-radius:100px;
    margin-left: auto;
    margin-right: auto;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    text-align:center;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    outline: none;
    :hover {
        box-shadow: ${props => props.theme.insetShadow};
    }
    .heart{
        position: absolute;
        top: 50%;
        left: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        width:${props => props.size}px;
        color: ${props => props.theme.dumbRed};
    }
    .-heart_active {
        animation: ${scale} ease 0.3s, ${fadeIn} ease 0.6s;
    }

`;