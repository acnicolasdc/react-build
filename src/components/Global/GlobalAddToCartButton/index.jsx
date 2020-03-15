import React from 'react'
import styled from 'styled-components';

export const ButtonContainer =  styled.button`
    position: relative;
    border: none;
    outline: none;
    border-radius:100px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 15px;
    text-align:center;
    background-color: #E0E5EC;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
    :hover {
        box-shadow:
            inset 1rem 1rem 2rem rgb(163,177,198,0.5),
            inset -1rem -1rem 2rem rgba(255,255,255,.5);
    }

`;

const GlobalAddToCartButton = ({ title }) => {
    return (
        <ButtonContainer>
            <p>{title}</p>
        </ButtonContainer>
    )
}
GlobalAddToCartButton.defaultProps = {
    title: 'Add to Cart',
}
export default GlobalAddToCartButton;
