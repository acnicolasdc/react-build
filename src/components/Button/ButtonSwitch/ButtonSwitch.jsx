import React from 'react';
import { ButtonSwitchContainer } from './styles';

function Switch ({ theme: themeProvider, isToggle, onClick: handleOnclick, IconLeft, IconRight}) {
    const colorLeft = isToggle?'#32afa9':'#FFF';
    const colorRight = isToggle?'#FFF':'#f0cf85';
    return (
        <ButtonSwitchContainer onClick={handleOnclick} theme={ themeProvider }>
            <IconLeft color={colorLeft}/>
            <IconRight color={colorRight}/>
        </ButtonSwitchContainer>
    );
}

export default Switch;
