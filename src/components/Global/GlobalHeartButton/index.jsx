import React from 'react'
import styled from 'styled-components';

export const CircleButton =  styled.button`
    position: relative;
    border: none;
    border-radius:100px;
    margin-left: auto;
    margin-right: auto;
    width: ${props => props.size};
    height: ${props => props.size};
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
        width:${props => props.size};
    }

`;

const GlobalHeartButton = ({ size }) => {
    return (
        <CircleButton size={size}>
            <svg xmlns="http://www.w3.org/2000/svg" className="heart" viewBox="0 0 362 327"><path d="M348.82 107.15c0-51.97-42.13-94.1-94.1-94.1-29.82 0-56.39 13.87-73.63 35.51l-.77-.77-.01.01c-17.25-21.2-43.55-34.75-73.02-34.75-51.97 0-94.1 42.13-94.1 94.1 0 29.47 13.55 55.77 34.75 73.02l-.69.69 133.08 133.08L313.4 180.87l-.09-.09c21.64-17.24 35.51-43.81 35.51-73.63z" fill="#e22d48"/></svg>
        </CircleButton>
    )
}
GlobalHeartButton.defaultProps = {
    size: '100px',
}
export default GlobalHeartButton;
