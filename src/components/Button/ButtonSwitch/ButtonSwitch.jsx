import React from 'react';
import { ButtonSwitchContainer } from './styles';

function Switch ({ theme: themeProvider, isToggle, onClick: handleOnclick, IconLeft, IconRight}) {
    const colorLeft = isToggle?'#F8F8':'#FFF';
    const colorRight = isToggle?'#FFF':'#F8F8';
    return (
        <ButtonSwitchContainer onClick={handleOnclick} theme={ themeProvider }>
            <IconLeft color={colorLeft}/>
            <IconRight color={colorRight}/>
        </ButtonSwitchContainer>
    );
}

export default Switch;
