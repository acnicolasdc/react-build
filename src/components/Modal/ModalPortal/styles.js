import styled from 'styled-components';
import { fadeIn, fadeOut } from 'assets/animations';

export const Overlay = styled.div`
    display:${props => props.openModal?'block':'none'};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    animation: ${props => props.openModal?fadeIn:fadeOut} ease 1s;
`;