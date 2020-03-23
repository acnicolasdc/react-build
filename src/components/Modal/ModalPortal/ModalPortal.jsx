import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './styles';
const modalRoot = document.getElementById('modal-root');

function ModalPortal({ children, open }) {
    return (
        // open?(
            createPortal(
                <Overlay openModal={open}>
                    {children}
                </Overlay>,modalRoot
            )
        // ):null
    )
}

export default ModalPortal;
