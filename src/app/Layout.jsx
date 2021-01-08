import React, { useContext } from 'react';
import Main from './router';
import ButtonSwitch from 'components/Button/ButtonSwitch';
import ButtonToggle from 'components/Button/ButtonToggle';
import ModalSimple from 'components/Modal/ModalSimple';
import Header from './Header';
import { ThemeContext } from 'theme/index';
import { DarkModeContainer } from './styles';
function Layout() {
    const { dark, modal, auto, toggleSwitch, toggleModal, toggleModeAuto } = useContext(ThemeContext);
    return (
        <>
            <Header/>
            <Main />
            <DarkModeContainer>
                <ButtonSwitch onClick={toggleSwitch} isToggle={dark}/>
                <ButtonToggle onClick={toggleModeAuto} isToggle={auto}/>
            </DarkModeContainer>
            <ModalSimple
                title='Automatic Dark mode on'
                text='This is the automatic mode. This mode works depending on your time zone.'
                onClick={toggleModal}
                open={modal}
            />
        </>
    );
}

export default Layout;
