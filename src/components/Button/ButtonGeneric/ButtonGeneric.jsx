import React from 'react'
import { ButtonGenericContainer } from './styles';

const ButtonGeneric = ({ theme: themeProvider, onClick:handleOnclick, title }) => {
    return (
        <ButtonGenericContainer theme={ themeProvider } onClick={handleOnclick}>
            <p>{title}</p>
        </ButtonGenericContainer>
    )
}

export default ButtonGeneric;
