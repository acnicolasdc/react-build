import styled from 'styled-components';
import { rotation } from 'assets/animations';

export const ModalSimpleContainer =  styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    max-height: 500px;
    padding: 20px 20px;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    border-radius: 10px;
    text-align: center;
    .modal_title{
        color: ${props => props.theme.titleColor};
        margin: 0;
        line-height: 2;
    }
    .modal_text{
        margin: 0;
        color: ${props => props.theme.textColor};
    }
    .icon_rotate{
        animation: ${rotation} ease 1s;
        color: ${props => props.theme.iconColorContrast};
    }
    button {
        margin-top: 20px;
    }
`;