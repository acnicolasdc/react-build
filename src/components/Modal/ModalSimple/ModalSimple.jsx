import React from 'react'
import classNames from 'classnames';
import { ModalSimpleContainer } from './styles';

function ModalSimple({ Icon, Button, text, title, iconSize, open }) {
    const openModal = classNames({ '-open_modal': open });
    return (
            <ModalSimpleContainer className={openModal}>
                <div className='modal_container'>
                    <Icon className='icon_rotate' size={iconSize}/>
                    <h3 className='modal_title'>{title}</h3>
                    <p className='modal_text'>{text}</p>
                    <Button/>
                </div>
            </ModalSimpleContainer>
    )
}

export default ModalSimple;

