import React from 'react';
import { ButtonToggleContainer } from './styles';

function ButtonToggle ({ theme: themeProvider, isToggle, onClick: handleOnclick, Icon}) {
    const handleColor = isToggle?'#32afa9':'rgb(113, 113, 113)';
    return (
        <ButtonToggleContainer onClick={handleOnclick} theme={ themeProvider } toggle={isToggle}>
            <Icon color={handleColor}/>
        </ButtonToggleContainer>
    );
}

export default ButtonToggle;
