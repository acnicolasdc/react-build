import React, { useState, useLayoutEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

export const ThemeContext = React.createContext({ dark: false, toggle: () => {} });

function ThemeProvider (props) {
    const [dark, setDark] = useState(false);

    useLayoutEffect(() => {
        const lastTheme = window.localStorage.getItem('darkTheme');
        if (lastTheme === 'true') {
            setDark(true);
            applyTheme(darkTheme.background);
        } else {
            setDark(false);
            applyTheme(lightTheme.background);
        }
    }, [dark]);

    const applyTheme = theme => {
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = `background-color: ${theme}; transition: .5s ease;`;
    }

    const toggle = () => {
        setDark(!dark);
        window.localStorage.setItem('darkTheme', !dark);
    };

    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            <StyledThemeProvider theme={dark?darkTheme:lightTheme}>
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
