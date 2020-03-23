import React from 'react'
import { ButtonGenericContainer } from './styles';

const ButtonGeneric = ({ onClick:handleOnClick, title, ...restProps }) => {
    return (
        <ButtonGenericContainer
        {...restProps} //in this line we pass the theme provider
        onClick={(e)=>{
            e.stopPropagation();
            handleOnClick();
        }}>
            <p>{title}</p>
        </ButtonGenericContainer>
    )
}

export default ButtonGeneric;
