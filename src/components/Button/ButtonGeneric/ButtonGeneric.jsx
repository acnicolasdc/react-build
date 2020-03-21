import React from 'react'
import { ButtonGenericContainer } from './styles';

const ButtonGeneric = ({ title }) => {
    return (
        <ButtonGenericContainer>
            <p>{title}</p>
        </ButtonGenericContainer>
    )
}

export default ButtonGeneric;
