import React, { useState, useLayoutEffect } from 'react'

export const ThemeContext = React.createContext({
    dark: false,
    toggle: () => {},
});
function ThemeProvider (props) {
    const [dark, setDark] = useState(false);

    useLayoutEffect(() => {
        const lastTheme = window.localStorage.getItem('darkTheme');
        if (lastTheme === 'true') {
            setDark(true);
            applyTheme(darkTheme);
        } else {
            setDark(false);
            applyTheme(lightTheme);
        }
    }, [dark]);

    const applyTheme = theme => {
        const root = document.getElementsByTagName('html')[0];
        root.style.cssText = theme.join(';');
    }

    const toggle = () => {
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = 'transition: background .5s ease';
        setDark(!dark);
        window.localStorage.setItem('darkTheme', !dark);
    };

    return (
    <ThemeContext.Provider value={{
        dark,
        toggle,
    }}>
        {props.children}
    </ThemeContext.Provider>
    )
}

export default ThemeProvider;

// styles
const lightTheme = [
    '--border: rgba(0,0,0,.2)',
    '--shadow: #000',
    '--heading: rgba(255,100,0,1)',
    '--main: #1d8f13',
    '--text: #000',
    '--textAlt: #fff',
    '--inactive: rgba(0,0,0,.3)',
    '--background: white',
  ];
  
  const darkTheme = [
    '--border: rgba(255,255,255,.1)',
    '--shadow: #000',
    '--heading: rgba(255,255,5,.9)',
    '--main: #79248f',
    '--text: rgb(255, 255, 255)',
    '--textAlt: #fff',
    '--inactive: rgba(255,255,255,.3)',
    '--background: #2D2D2D',
];

