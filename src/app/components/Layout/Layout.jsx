import React, { useContext } from 'react';
import usePortal from "hooks/usePortal";
import ButtonSwitch from 'components/Button/ButtonSwitch';
import ButtonToggle from 'components/Button/ButtonToggle';
import ModalSimple from 'components/Modal/ModalSimple';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ThemeContext } from 'providers/theme';
import { DarkModeContainer, ApplicationContainer } from './styles';

function Layout({ children }) {
    const createPortal = usePortal('modal-root');
    const { dark, modal, auto, toggleSwitch, toggleModal, toggleModeAuto } = useContext(ThemeContext);
    return (
        <>
        <Header />
        <ApplicationContainer>
            {/* <Main /> */}
            { children }
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
        </ApplicationContainer>
        <Footer />
        </>
    );
}

export default Layout;
