import React from 'react';
import usePortal from "hooks/usePortal";
import { Overlay } from './styles';

function ModalPortal({ children, open }) {
    const createPortal = usePortal('modal-root');
    return (
        createPortal(
            <Overlay openModal={open}>
                {children}
            </Overlay>
        )
    )
}

export default ModalPortal;
