import React from 'react'
import { ButtonGenericContainer } from './styles';

const ButtonGeneric = ({ theme: themeProvider, title }) => {
    return (
        <ButtonGenericContainer theme={ themeProvider }>
            <p>{title}</p>
        </ButtonGenericContainer>
    )
}

export default ButtonGeneric;
