import React, { useState, useLayoutEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { lightTheme, darkTheme } from './theme';

export const ThemeContext = React.createContext({ dark: false, toggle: () => {} });

function ThemeProvider (props) {
    const [dark, setDark] = useState(false);

    useLayoutEffect(() => {
        const lastTheme = window.localStorage.getItem('darkTheme');
        const isDarkMode = lastTheme === 'true' ? true : false;
        setDark(isDarkMode);
    }, [dark]);

    const toggle = () => {
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = 'transition: background .5s ease';
        setDark(!dark);
        window.localStorage.setItem('darkTheme', !dark);
    };

    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            <StyledThemeProvider theme={dark?darkTheme:lightTheme}>
                <GlobalStyle />
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
