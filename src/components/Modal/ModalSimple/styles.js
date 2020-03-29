import styled from 'styled-components';
import { rotation, fadeIn, fadeOut } from 'assets/animations';

export const ModalSimpleContainer = styled.div`
    display:none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.modalBackground};
    animation: ${fadeOut} ease 1s;
    &.-open_modal{
        display:block;
        animation: ${fadeIn} ease 1s;
    }
    .modal_container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 500px;
        min-width: 300px;
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
    }
`;