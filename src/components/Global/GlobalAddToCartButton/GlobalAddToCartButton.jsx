import React from 'react'
import { ButtonContainer } from './styles';

const GlobalAddToCartButton = ({ title }) => {
    return (
        <ButtonContainer>
            <p>{title}</p>
        </ButtonContainer>
    )
}

export default GlobalAddToCartButton;
