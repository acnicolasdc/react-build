import React from 'react'
import { ButtonGenericContainer } from './styles';

const ButtonGeneric = ({ theme: themeProvider, onClick:handleOnClick, title }) => {
    return (
        <ButtonGenericContainer theme={ themeProvider } onClick={(e)=>{
            e.stopPropagation();
            handleOnClick();
        }}>
            <p>{title}</p>
        </ButtonGenericContainer>
    )
}

export default ButtonGeneric;
