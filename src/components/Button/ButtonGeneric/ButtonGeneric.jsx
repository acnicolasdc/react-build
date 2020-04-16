import React from 'react'
import { ButtonGenericContainer } from './styles';

const ButtonGeneric = ({ onClick:handleOnClick, title }) => {
    return (
        <ButtonGenericContainer
        onClick={(e)=>{
            e.stopPropagation();
            handleOnClick();
        }}>
            <p>{title}</p>
        </ButtonGenericContainer>
    )
}

export default ButtonGeneric;
