import React, { useState, useLayoutEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getStorage, setStorage } from 'utils/localStorage';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './globalStyles';
import useClock from './hooks/useClock';

export const ThemeContext = React.createContext({ dark: false, auto: false, autoMode: () => {}, toggle: () => {} });

function ThemeProvider (props) {
    const [dark, setDark] = useState(false);
    const [auto, setAuto] = useState(false);
    const isDarkSite = useClock(new Date(), auto);
    if(isDarkSite !== null && auto){
        setDark(isDarkSite);
        setStorage('darkTheme', isDarkSite);
    }
    useLayoutEffect(() => {
        const lastTheme = getStorage('darkTheme');
        const lastAutoMode = getStorage('autoMode');
        const isDarkMode = lastTheme === 'true' ? true : false;
        const isAutoMode= lastAutoMode === 'true' ? true : false;
        setDark(isDarkMode);
        setAuto(isAutoMode);
    }, [dark]);

    const toggle = () => {
        _handleTransition();
        if(auto)toggleAutoMode();
        setDark(!dark);
        setStorage('darkTheme', !dark);
    };

    const toggleAutoMode = () => {
        _handleTransition();
        setAuto(!auto);
        setStorage('autoMode', !auto);
    };
    const _handleTransition = () => {
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = 'transition: background .5s ease';
    }

    return (
        <ThemeContext.Provider value={{ dark, auto, toggle, autoMode:toggleAutoMode }}>
            <StyledThemeProvider theme={dark?darkTheme:lightTheme}>
                <GlobalStyle />
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
