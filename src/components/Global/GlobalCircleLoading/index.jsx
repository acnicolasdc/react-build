import React from 'react'
import styled from 'styled-components';

export const Loader =  styled.div`
    position: relative;
    height: 75px;
    width: 75px;
    background: #E0E5EC;
    border-radius: 50%;
    box-shadow:
        inset -7px -7px 25px 0 rgba(255, 255, 255, 0.5),
        inset 7px 7px 25px 0 rgb(163,177,198,0.5);
    ::before {
        content: "";
        position: absolute;
        height: 60px;
        width: 60px;
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
        height: 45px;
        width: 45px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: rotate 0.5s infinite linear;
    }
    @keyframes rotate {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }

    }
    ::after {
        border: 15px solid rgb(1,177,198,0.3);
        border-right: solid 15px transparent;
        border-top: solid 15px transparent;
        border-left: solid 15px transparent;
    }
`;

const GlobalCircleLoading = (props) => {
    return (
        <Loader/>
    )
}

export default GlobalCircleLoading;
