import styled from 'styled-components';
import { rotation } from '../../../assets/animations/rotativeAnimations';

export const Loader =  styled.div`
    position: relative;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    background: #E0E5EC;
    border-radius: 50%;
    box-shadow:
        inset -7px -7px 25px 0 rgba(255, 255, 255, 0.5),
        inset 7px 7px 25px 0 rgb(163,177,198,0.5);
    ::before {
        content: "";
        position: absolute;
        height: ${props => props.size-Math.round(props.size*0.15)}px;
        width: ${props => props.size-Math.round(props.size*0.15)}px;
        background: #E0E5EC;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        box-shadow:
            inset -7px -7px 25px 0 rgba(255, 255, 255, 0.9),
            inset 7px 7px 25px 0 rgb(163,177,198,0.3);
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
        animation: ${rotation} 0.5s infinite linear;
    }
    ::after {
        border: ${props => props.size-Math.round(props.size*0.85)}px solid rgb(1,177,198,0.3);
        border-right: solid ${props => props.size-Math.round(props.size*0.85)}px transparent;
        border-top: solid ${props => props.size-Math.round(props.size*0.85)}px transparent;
        border-left: solid ${props => props.size-Math.round(props.size*0.85)}px transparent;
    }
`;