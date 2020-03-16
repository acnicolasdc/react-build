import React from 'react'
import { ButtonContainer } from './styles';

const GlobalButton = ({ title }) => {
    return (
        <ButtonContainer>
            <p>{title}</p>
        </ButtonContainer>
    )
}

export default GlobalButton;
