import React from 'react'
import classNames from 'classnames';
import { ModalSimpleContainer } from './styles';

function ModalSimple({ onClick:handleOnClick, buttonTitle, Icon, Button, text, title, iconSize, open, ...restProps }) {
    const openModal = classNames({ '-open_modal': open });
    return (
            <ModalSimpleContainer className={openModal} {...restProps}>
                <div className='modal_container'>
                    <Icon className='icon_rotate' size={iconSize}/>
                    <h3 className='modal_title'>{title}</h3>
                    <p className='modal_text'>{text}</p>
                    <Button title={buttonTitle} onClick={handleOnClick}/>
                </div>
            </ModalSimpleContainer>
    )
}

export default ModalSimple;

