import React, { useContext } from 'react';
import Main from './router';
import ButtonSwitch from 'components/Button/ButtonSwitch';
import { ThemeContext } from 'theme/index';
import { DarkModeContainer } from './styles';

function Layout() {
    const { dark, toggle } = useContext(ThemeContext);
    return (
        <>
            <Main />
            <DarkModeContainer>
                <ButtonSwitch onClick={toggle} isToggle={dark}/>
            </DarkModeContainer>
        </>
    );
}

export default Layout;
