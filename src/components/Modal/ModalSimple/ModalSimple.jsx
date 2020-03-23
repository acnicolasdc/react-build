import React from 'react'
import { ModalSimpleContainer } from './styles';

function ModalSimple({ theme: themeProvider, onClick:handleOnclick, buttonTitle, Icon, Button, text, title, iconColor, iconSize }) {
    return (
        <ModalSimpleContainer theme={ themeProvider }>
            <Icon className='icon_rotate' size={iconSize} color={iconColor}/>
            <h3 className='modal_title'>{title}</h3>
            <p className='modal_text'>{text}</p>
            <Button title={buttonTitle} onClick={handleOnclick}/>
        </ModalSimpleContainer>
    )
}

export default ModalSimple;

