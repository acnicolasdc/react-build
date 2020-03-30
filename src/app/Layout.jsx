import React, { useContext } from 'react';
import Main from './router';
import usePortal from "hooks/usePortal";
import ButtonSwitch from 'components/Button/ButtonSwitch';
import ButtonToggle from 'components/Button/ButtonToggle';
import ModalSimple from 'components/Modal/ModalSimple';
import { ThemeContext } from 'theme/index';
import { DarkModeContainer } from './styles';
function Layout() {
    const createPortal = usePortal('modal-root');
    const { dark, modal, auto, toggleSwitch, toggleModal, toggleModeAuto } = useContext(ThemeContext);
    return (
        <>
            <Main />
            <DarkModeContainer>
                <ButtonSwitch onClick={toggleSwitch} isSwitch={dark}/>
                <ButtonToggle onClick={toggleModeAuto} isToggle={auto}/>
            </DarkModeContainer>
            {createPortal(
                <ModalSimple
                    title='Automatic Dark mode on'
                    text='This is the automatic mode. This mode works depending on your time zone.'
                    Button={()=> <ModalSimple.Button onClick={toggleModal} title='Close'/>}
                    open={modal}
                />)
            }
        </>
    );
}

export default Layout;
