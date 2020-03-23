import styled from 'styled-components';
import { pulse } from 'assets/animations';

const customPulse = pulse({start:'rgb(1,177,198,0.3)', mid:'rgba(215,255,253,0)', final:'rgba(215,255,253, 0)'});

export const ButtonToggleContainer =  styled.button`
    width: 4rem;
    height: 2rem;
    margin: 2rem 0;
    position: relative;
    border-radius: 10px;
    border: none;
    outline: none;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    padding: 0;
    animation: ${props => props.toggle ? customPulse : ''} 2s infinite;
    :hover {
        box-shadow: ${props => props.theme.insetShadow};
    }
    p {
        font-size: 1rem;
        color: ${props => props.theme.textColor};
        padding: 0px 20px;
    }
    .icon_toggle {
        color: ${props => props.theme.disabledGray};
    }
    .-active {
        color: ${props => props.theme.shinyBlue};
    }
`;