import React, { useState, useLayoutEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getStorage, setStorage } from 'utils/localStorage';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './globalStyles';
import useClock from './hooks/useClock';

export const lightContextTheme = lightTheme;
export const darkContextTheme = darkTheme;
export const ThemeContext = React.createContext({
    dark: false,
    auto: false,
    modal: false,
    toggleSwitch: () => {},
    toggleModeAuto: () => {},
    toggleModal: () => {},
});

function ThemeProvider (props) {
    const [modal, setModal] = useState(false);
    const [dark, setDark] = useState(false);
    const [auto, setAuto] = useState(false);
    const isDarkSite = useClock(new Date(), auto);

    useLayoutEffect(() => {
        const lastTheme = getStorage('darkTheme');
        const lastAutoMode = getStorage('autoMode');
        const isDarkMode = lastTheme === 'true' ? true : false;
        const isAutoMode= lastAutoMode === 'true' ? true : false;
        setDark(isDarkMode);
        setAuto(isAutoMode);
    }, [dark]);

    const toggleSwitch = () => {
        _handleTransition();
        if(auto)toggleModeAuto();
        setDark(!dark);
        setStorage('darkTheme', !dark);
    };

    const toggleModeAuto = () => {
        if(!auto)toggleModal();
        setAuto(!auto);
        setStorage('autoMode', !auto);
    };

    const toggleModal = () => {
        setModal(!modal)
    }

    const _handleTransition = () => {
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = 'transition: background .5s ease';
    }

    if(isDarkSite !== null && auto){
        _handleTransition();
        setDark(isDarkSite);
        setStorage('darkTheme', isDarkSite);
    }

    return (
        <ThemeContext.Provider value={{ dark, modal, auto, toggleSwitch, toggleModeAuto, toggleModal }}>
            <StyledThemeProvider theme={dark?darkTheme:lightTheme}>
                <GlobalStyle />
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
