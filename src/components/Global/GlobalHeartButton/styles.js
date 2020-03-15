import styled from 'styled-components';

export const CircleButton =  styled.button`
    position: relative;
    border: none;
    border-radius:100px;
    margin-left: auto;
    margin-right: auto;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    text-align:center;
    background-color: #E0E5EC;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
    outline: none;
    :hover {
        box-shadow:
            inset 1rem 1rem 2rem rgb(163,177,198,0.5),
            inset -1rem -1rem 2rem rgba(255,255,255,.5);
    }
    .heart{
        position: absolute;
        top: 50%;
        left: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        width:${props => props.size}px;
    }

`;