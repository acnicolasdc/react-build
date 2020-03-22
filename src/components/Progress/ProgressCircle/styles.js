import styled from 'styled-components';
import { rotate } from 'assets/animations/rotativeAnimations';

export const ProgressCircleLoader =  styled.div`
    position: relative;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    background-color:${props => props.theme.background};
    border-radius: 50%;
    box-shadow: ${props => props.theme.squaredShadow};
    ::before {
        content: "";
        position: absolute;
        height: ${props => props.size-Math.round(props.size*0.15)}px;
        width: ${props => props.size-Math.round(props.size*0.15)}px;
        background-color:${props => props.theme.background};
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        box-shadow: ${props => props.theme.squaredShadow};
    }
    ::after {
        content: "";
        position: absolute;
        height: ${props => props.size-Math.round(props.size*0.25)}px;
        width: ${props => props.size-Math.round(props.size*0.25)}px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ${rotate} 0.5s infinite linear;
    }
    ::after {
        border: ${props => props.size-Math.round(props.size*0.85)}px solid rgb(1,177,198,0.3);
        border-right: solid ${props => props.size-Math.round(props.size*0.85)}px transparent;
        border-top: solid ${props => props.size-Math.round(props.size*0.85)}px transparent;
        border-left: solid ${props => props.size-Math.round(props.size*0.85)}px transparent;
    }
`;